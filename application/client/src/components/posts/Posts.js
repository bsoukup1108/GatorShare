import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = true;

const Posts = () => {
	// redirect if not logged in
	if (!isAuthenticated) {
		return <Navigate to='/login' />;
	}

	alert('Will be implemented soon!');

	return (
		<>
			<div className='posts'>
			
			</div>
		</>
	);
};

export default Posts;

