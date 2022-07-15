import React from 'react';
import { Navigate } from 'react-router-dom';

import { getToken } from '../../js/useToken';

const Posts = () => {
	// redirect if not logged in
	if (!getToken()) {
		return <Navigate to='/login' />;
	}

	alert('Will be implemented soon!');

	return (
		<>
			<div className='posts'>
				<h1 className='text-secondary'>You will see all posts here!</h1>
			</div>
		</>
	);
};

export default Posts;
