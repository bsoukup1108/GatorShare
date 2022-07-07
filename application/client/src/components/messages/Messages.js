import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUser } from '../../js/profile';

const isAuthenticated = true;

const Messages = () => {
	// redirect if not logged in
	if (!isAuthenticated) {
		return <Navigate to='/login' />;
	}

	alert('Will be implemented soon!');

	return (
		<>
			<div className='messages'>
				<h1 className='text-secondary'>You have no messages yet...</h1>
			</div>
		</>
	);
};

export default Messages;
