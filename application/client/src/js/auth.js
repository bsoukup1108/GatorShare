import { ReactSession } from 'react-client-session';
import http from '../http-common';

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
				//	return window.location.href('/');
			} else {
				// TODO errors

				console.log('token error');
				return null;
			}
		})
		.catch(function (err) {
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
			return res.status === 200
				? (window.location = '/login')
				: window.location.reload();
		})
		.catch(function (err) {
			console.log(err);
			return window.location.reload();
			document.getElementById('signup-btn-1').style.visibility =
				'visible';
		});
};

export const logout = () => {
	const token = ReactSession.get('token');

	if (token) {
		// replace w/ removeItem
		localStorage.clear();
	} else {
		// TODO errors
		console.log('token error');
	}
};
