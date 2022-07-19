import { ReactSession } from 'react-client-session';
import http from '../http-common';
import { alert } from './alert';

export const login = (formData) => {
	const { email, password } = formData;
	http.post('/login', {
		email: email,
		password: password,
	})
		.then((response) => {
			console.log(response);
			if (response.data.token) {
				const token = response.data.token;
				console.log(token);
				ReactSession.set('token', token);
				document.getElementById('login-btn-1').style.visibility =
					'visible';
				alert('success', 'successfully logged in');
				return window.location.href('/');
			} else {
				// TODO errors
				alert('danger', 'failed to log in...');
				console.log('token error');
				return null;
			}
		})
		.catch(function (err) {
			//	alert('danger', '');
			document.getElementById('login-btn-1').style.visibility = 'visible';
			console.log(err);
			return window.location.reload();
		});
};

export const register = (formData) => {
	const { name, lastname, email, password } = formData;
	http.post('/signup', {
		firstName: name,
		lastName: lastname,
		email: email,
		password: password,
	})
		.then((res) => {
			// TODO signup
			alert('success', 'successfully signed up');

			return res.status === 200
				? (window.location = '/login')
				: window.location.reload();
		})
		.catch(function (err) {
			alert('danger', 'failed to sign up...');
			document.getElementById('signup-btn-1').style.visibility =
				'visible';
			return window.location.reload();
		});
};

export const logout = () => {
	const token = ReactSession.get('token');

	alert('warning', 'successfully logged out');

	if (token) {
		// replace w/ removeItem
		localStorage.clear();
	} else {
		// TODO errors
		alert('danger', 'error logging out');
		console.log('token error');
	}
};
