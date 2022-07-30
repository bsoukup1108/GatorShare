import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ChatBox, { ChatFrame } from 'react-chat-plugin';
import { getToken } from '../../js/useToken';
import { useEffect } from 'react';
import { ReactSession } from 'react-client-session';

const Messages = () => {
	// redirect if not logged in
	if (!getToken()) {
		return <Navigate to='/login' />;
	}
	const currUser = ReactSession.get('currentUserId') || 0;
	const username = ReactSession.get('username') || 'Anonimous';

	const [messages, setMessages] = useState([
		{
			text: 'This is the very begginning of the conversation',
			type: 'notification',
		},
	]);

	const handleOnSendMessage = (message) => {
		// http.post('/message', { message: message, fromUserId: 3, toUserId: 3 })
		// 	.then((res) => {
		// 		//console.log(res);
		// 	})

		// 	// handle errors
		// 	.catch(function (err) {
		// 		console.log(err);
		// 		alert('danger', 'failed to send a message');
		// 	});

		// http.get('/message/all/3', {
		// 	User_ID: 3,
		// })
		// 	.then((res) => {
		// 		console.log(res.data);
		// 	})

		// 	// handle errors
		// 	.catch(function (err) {
		// 		console.log(err);
		// 		alert('danger', 'failed to send a message');
		// 	});

		setMessages(
			messages.concat({
				author: {
					username: username,
					id: 3,
					avatarUrl: '',
				},
				text: message,
				timestamp: +new Date(),
				type: 'text',
			})
		);
	};

	useEffect(() => {
		let notif = document.getElementById('notif-nav-1');
		if (notif) notif.setAttribute('class', 'dropdown me-1 notif-nav-2');
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
			<div id='group-chat-1'>
				<h1>Group Chat</h1>
			</div>
			<div id='chat-container'>
				<div id='chat-window'>
					<ChatBox
						messages={messages}
						userId={currUser}
						onSendMessage={handleOnSendMessage}
					/>
				</div>
			</div>
		</>
	);
};

export default Messages;
