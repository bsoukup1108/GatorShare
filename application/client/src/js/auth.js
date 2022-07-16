import { ReactSession } from 'react-client-session';
import http from '../http-common';

export const login = (formData) => {
	const { email, password } = formData;
	http.post('/login', {
		email: email,
		password: password,
	})
		.then((response) => {
			if (response.data.token) {
				const token = response.data.token;
				ReactSession.set('token', token);
				return window.location.reload();
			} else {
				// TODO errors
				console.log('token error');
				return null;
			}
		})
		.catch(function (err) {
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
