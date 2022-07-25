/**************************************************************
 * Class:  CSC-648 Summer 2022
 * Author: Aleksandr Gusev, Brianna Soukup
 * Project: Gatorshare website
 * File: auth.js
 * Description: this file includes all functions required for authentification
 *
 **************************************************************/

import { ReactSession } from 'react-client-session';

import http from '../http-common';
import { alert } from './alert';

// login function handles data for the Login page.
export const login = (formData) => {
	// the data for the axios request is stored here
	const { email, password } = formData;
	let id;

	// post request to the backend
	http.post('/login', {
		email: email,
		password: password,
	})
		.then((response) => {
			if (response.data.token) {
				const token = response.data.token;
				// user's id
				id = response.data.id;

				// store token and logged in user id
				ReactSession.set('token', token);
				ReactSession.set('currentUserId', id);
				// append success alert message
				alert('success', 'successfully logged in');

				// post request to get user's role, e.g. 'Student'
				http.get('/login/id/' + id)
					.then((response) => {
						ReactSession.set(
							'userRole',
							response.data.role_name[0].role_name
						);
					})
					// handle errors
					.catch(function (err) {
						console.log(err);
					});

				// redirects to home page if successfull
				return window.location.href('/');
			} else {
				// append fail alert if cant get user's role
				alert('danger', 'failed to log in...');
				return null;
			}
		})

		// handle errors
		.catch(function (err) {
			console.log(err);
			// reloads window if fail to login
			return window.location.reload();
		});
};

// register function handles data for the signup page.
export const register = (formData) => {
	// destruct data from props
	const { name, lastname, email, password, role } = formData;

	// send post request to register a new user
	http.post('/signup', {
		firstName: name,
		lastName: lastname,
		email: email,
		password: password,
		role: [role],
	})
		.then((res) => {
			// append success message
			alert('success', 'successfully signed up');

			// redirects to login if succes or append an error message
			// if fail. Page is not reloaded to keep user's data in the form
			return res.status === 200
				? (window.location = '/login')
				: alert('danger', 'failed to sign up...');
		})
		// handle errors
		.catch(function (err) {
			console.log(err);
			// append error message if can't sign up
			alert('danger', 'failed to sign up...');

			// reload page if the request failed
			return window.location.reload();
		});
};

// logout function handles signing out
export const logout = () => {
	// get current user's token
	const token = ReactSession.get('token');

	// if user logged in then clear the token
	if (token) {
		// append success message
		alert('warning', 'successfully logged out');
		// clear local storage
		localStorage.clear();
	} else {
		// if can't log out, append and error message
		alert('danger', 'error logging out');
		console.log('token error');
	}
};
