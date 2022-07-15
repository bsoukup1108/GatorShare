import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUser } from '../../js/profile';
import { getToken } from '../../js/useToken';

const Profile = () => {
	// redirect if not logged in
	if (!getToken()) {
		return <Navigate to='/login' />;
	}

	getUser().then((res) => {
		console.log(res);
	});

	alert('Will be implemented soon!');

	return (
		<>
			<div className='profile'>
				<h1 className='text-secondary'>Welcome To Your Profile!</h1>
			</div>
		</>
	);
};

export default Profile;
