import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ChatFeed, Message } from 'react-chat-ui';
import ChatBox, { ChatFrame } from 'react-chat-plugin';

import { getToken } from '../../js/useToken';

const Messages = () => {
	// redirect if not logged in
	if (!getToken()) {
		return <Navigate to='/login' />;
	}

	// alert('Will be implemented soon!');

	// return (
	// 	<>
	// 		<div className='messages'>
	// 			<h1 className='text-secondary'>You have no messages yet...</h1>
	// 		</div>
	// import "./styles.css";

	const [mes, setMess] = useState([
		new Message({
			id: 1,
			message: "I'm the recipient! (The person you're talking to)",
		}), // Gray bubble
		new Message({ id: 0, message: "I'm you -- the blue bubble!" }), // Blue bubble
	]);

	const [messages, setMessages] = useState([
		{
			text: 'This is the very begginning of the conversation',
			type: 'notification',
		},
	]);

	const handleOnSendMessage = (message) => {
		setMessages(
			messages.concat(
				{
					author: {
						username: 'John Doe',
						id: 2,
						avatarUrl: '',
					},
					text: message,
					timestamp: +new Date(),
					type: 'text',
				},
				{
					author: {
						username: 'Avocado',
						id: 1,
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
		<div id='chat-container'>
			<div id='side-bar'>
				<button
					type='button'
					className='btn btn-lg btn-light message-btn'
					style={{
						width: '100%',
						border: 'grey 1px solid ',
						margin: '0rem auto',
					}}
				>
					<span>AG</span> Avocado Green
				</button>
				<button
					type='button'
					className='btn btn-lg btn-light message-btn'
					style={{
						width: '100%',
						border: 'grey 1px solid ',
						margin: '0rem auto',
					}}
				>
					<span>JD</span> John Doe
				</button>
				<button
					type='button'
					className='btn btn-lg btn-light message-btn'
					style={{
						width: '100%',
						border: 'grey 1px solid ',
						margin: '0rem auto',
					}}
				>
					<span>MP</span> Max Payne
				</button>
			</div>
			<div id='chat-window'>
				<ChatBox
					messages={messages}
					userId={1}
					onSendMessage={handleOnSendMessage}
				/>
			</div>
		</div>
	);
};

// </>
// );
// };

export default Messages;
