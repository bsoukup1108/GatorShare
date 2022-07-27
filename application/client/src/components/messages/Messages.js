import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ChatFeed, Message } from 'react-chat-ui';
import ChatBox, { ChatFrame } from 'react-chat-plugin';

import { getToken } from '../../js/useToken';
import http from '../../http-common';

const Messages = () => {
	// redirect if not logged in
	if (!getToken()) {
		return <Navigate to='/login' />;
	}

	const [messages, setMessages] = useState([
		{
			text: 'This is the very begginning of the conversation',
			type: 'notification',
		},
	]);

	const handleOnSendMessage = (message) => {
		http.post('/message', { message: message, fromUserId: 3, toUserId: 3 })
			.then((res) => {
				//console.log(res);
			})

			// handle errors
			.catch(function (err) {
				console.log(err);
				alert('danger', 'failed to send a message');
			});

		http.get('/message/all/3', {
			User_ID: 3,
		})
			.then((res) => {
				console.log(res.data);
			})

			// handle errors
			.catch(function (err) {
				console.log(err);
				alert('danger', 'failed to send a message');
			});

		setMessages(
			messages.concat(
				{
					author: {
						username: 'John Doe',
						id: 3,
						avatarUrl: '',
					},
					text: message,
					timestamp: +new Date(),
					type: 'text',
				},
				{
					author: {
						username: 'Avocado',
						id: 3,
						avatarUrl: '',
					},
					text: message,
					timestamp: +new Date(),
					type: 'text',
				}
			)
		);
	};

	return (
		<>
			<div id='group-chat-1'>
				<h1>Group Chat</h1>
			</div>
			<div id='chat-container'>
				<div id='chat-window'>
					<ChatBox
						messages={messages}
						userId={1}
						onSendMessage={handleOnSendMessage}
					/>
				</div>
			</div>
		</>
	);
};

export default Messages;
