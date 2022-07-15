import { ReactSession } from 'react-client-session';
import http from '../http-common';
import { Navigate } from 'react-router-dom';

export const login = (formData) => {
	const { email, password } = formData;
	http.post('/login', {
		email: email,
		password: password,
	}).then((response) => {
		if (response.data.token) {
			const token = response.data.token;
			ReactSession.set('token', token);
			return window.location.reload();
		} else {
			// TODO errors
			console.log('token error');
			return null;
		}
	});
};

export const register = (formData) => {
	const { name, lastname, email, password } = formData;
	http.post('/signup', {
		name: name,
		lastname: lastname,
		email: email,
		password: password,
	}).then((response) => {
		// TODO signup
		console.log(response);
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
