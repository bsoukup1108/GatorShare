import React from 'react';
import { Navigate } from 'react-router-dom';

import { getToken } from '../../js/useToken';

const CreatePost = () => {
	// redirect if not logged in
	if (!getToken()) {
		return <Navigate to='/login' />;
	}

	alert('Will be implemented soon!');

	return (
		<>
			<div className='createPost'>
				<h1 className='text-secondary'>
					You can create a new post here!
				</h1>
			</div>
		</>
	);
};

export default CreatePost;
