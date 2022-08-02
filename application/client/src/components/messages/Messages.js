import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../../js/useToken';
import { useEffect } from 'react';
import { ReactSession } from 'react-client-session';
import moment from 'moment';
import http from '../../http-form-data';
let postIdArr = [];

const Messages = () => {
	// redirect if not logged in
	if (!getToken()) {
		return <Navigate to='/login' />;
	}

	const currUser = ReactSession.get('currentUserId') || 0;
	const username = ReactSession.get('username') || 'Anonimous';
	const [messages, setMessages] = useState([]);

	const createDiv = (message, id, userName, dateSent, user_id) => {
		let mainDiv = document.createElement('div');
		mainDiv.setAttribute('id', id);

		if (currUser === user_id) {
			mainDiv.className = 'message-123 message-123-right';
		} else {
			mainDiv.className = 'message-123 message-123-left';
		}

		let messDiv = document.createElement('div');
		if (currUser === user_id) {
			messDiv.className = 'alert alert-primary';
		} else {
			messDiv.className = 'alert alert-secondary';
		}
		messDiv.innerHTML = `<strong>${message}</strong>`;
		let authorDiv = document.createElement('div');

		if (currUser !== user_id) {
			authorDiv.innerHTML = `<a class='badge badge-primary' href='/user/${user_id}'>${userName}</a>`;
		}

		let date = moment(dateSent).format('LLL');
		let dateDiv = document.createElement('div');
		dateDiv.className = 'text-muted';
		dateDiv.innerHTML = `<small>${date}</small>`;

		mainDiv.appendChild(messDiv);
		mainDiv.appendChild(authorDiv);
		mainDiv.appendChild(dateDiv);

		return mainDiv;
	};

	setInterval(function () {
		retrieveMessages();
	}, 5000);

	const retrieveMessages = () => {
		http('GroupChat', {})
			.then((res) => {
				res.data.map((el) => {
					let div = document.getElementById('mess-box');
					if (!postIdArr[el.id]) {
						let newDiv = createDiv(
							el.message,
							el.id,
							el.userName,
							el.dateSent,
							el.user_id
						);
						div.appendChild(newDiv);
						postIdArr[el.id] = el.id;

						// auto scrolls down
						let objDiv = document.getElementById('mess-box');
						objDiv.scrollTop = objDiv.scrollHeight;
					}
				});
			})
			.catch((e) => {
				console.log(e);
			});
	};

	useEffect(() => {
		http('GroupChat', {})
			.then((res) => {
				res.data.map((el) => {
					postIdArr[el.id] = [el.id];
					let div = document.getElementById('mess-box');
					let newDiv = createDiv(
						el.message,
						el.id,
						el.userName,
						el.dateSent,
						el.user_id
					);
					div.appendChild(newDiv);
					// auto scrolls down
					let objDiv = document.getElementById('mess-box');
					objDiv.scrollTop = objDiv.scrollHeight;
				});
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	const sendMessage = (e) => {
		e.preventDefault();
		let inp = document.getElementById('msg-123');

		http.post('GroupChat', {
			username: username,
			User_id: currUser,
			Message: inp.value,
		})
			.then((res) => {
				retrieveMessages();
			})
			.catch(function (err) {
				console.log(err);
			})
			.catch((e) => {
				console.log(e);
			});

		inp.value = '';
	};

	useEffect(() => {
		let notif = document.getElementById('notif-nav-1');
		if (notif && window.location.pathname !== '/messages')
			notif.setAttribute('class', 'dropdown me-1 notif-nav-2');
		let notifBox = document.getElementById('notifications-1');

		if (notifBox) {
			if (
				notifBox.innerHTML ===
				"<p>You don't have any notifications yet</p>"
			) {
				notifBox.innerHTML = '';
			}

			let para = document.createElement('p');
			let innerTextNode = document.createTextNode(
				'new message in Group Chat'
			);
			para.appendChild(innerTextNode);
			para.appendChild(innerTextNode);

			notifBox.appendChild(para);
		}
	}, [messages]);

	return (
		<>
			<div id='messages-111'>
				<div id='mess-box'></div>
				<div id='input-123'>
					<input
						className='input-group-text input-message '
						type='text'
						name='messsage'
						placeholder='send a message'
						id='msg-123'
					/>
					<button
						id='message-btn-1'
						className='btn btn-secondary send-btn '
						type='submit'
						value='send'
						onClick={(e) => {
							sendMessage(e);
						}}
					>
						Send
					</button>
				</div>
			</div>
		</>
	);
};

export default Messages;
