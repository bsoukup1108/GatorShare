import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ChatBox, { ChatFrame } from 'react-chat-plugin';
import { getToken } from '../../js/useToken';
import { useEffect } from 'react';
import { ReactSession } from 'react-client-session';
import http from '../../http-form-data';
import noImage from '../../img/tutor.jpg';
let postIdArr = [];

const Messages = () => {
	// redirect if not logged in
	if (!getToken()) {
		return <Navigate to='/login' />;
	}

	const currUser = ReactSession.get('currentUserId') || 0;
	const username = ReactSession.get('username') || 'Anonimous';
	const [messages, setMessages] = useState([]);

	const createDiv = (message, id, userName, dateSent) => {
		let mainDiv = document.createElement('div');
		mainDiv.setAttribute('id', id);
		mainDiv.className = 'message-123';

		let messDiv = document.createElement('div');
		messDiv.innerHTML = message;

		let authorDiv = document.createElement('div');
		authorDiv.innerHTML = userName;

		let dateDiv = document.createElement('div');
		dateDiv.innerHTML = dateSent;

		mainDiv.appendChild(messDiv);
		mainDiv.appendChild(authorDiv);
		mainDiv.appendChild(dateDiv);

		return mainDiv;
	};

	setInterval(function () {
		retrieveMessages();
		console.log('fire');
	}, 5000);

	const retrieveMessages = () => {
		http('GroupChat', {}).then((res) => {
			res.data.map((el) => {
				let div = document.getElementById('mess-box');
				if (!postIdArr[el.id]) {
					let newDiv = createDiv(
						el.message,
						el.id,
						el.userName,
						el.dateSent
					);
					div.appendChild(newDiv);
					postIdArr[el.id] = el.id;
				}
			});
		});
	};

	useEffect(() => {
		http('GroupChat', {}).then((res) => {
			res.data.map((el) => {
				postIdArr[el.id] = [el.id];
				let div = document.getElementById('mess-box');
				let newDiv = createDiv(
					el.message,
					el.id,
					el.userName,
					el.dateSent
				);
				div.appendChild(newDiv);
			});
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
			});

		console.log(inp.value);

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
						className='input-message'
						type='text'
						name='messsage'
						placeholder='send a message'
						id='msg-123'
					/>
					<button
						id='message-btn-1'
						className='send-btn '
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
