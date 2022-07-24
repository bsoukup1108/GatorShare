import { ReactSession } from 'react-client-session';
import http from '../http-common';
import { alert } from './alert';

export const login = (formData) => {
	const { email, password } = formData;
	let id;
	http.post('/login', {
		email: email,
		password: password,
	})
		.then((response) => {
			console.log(response);
			if (response.data.token) {
				const token = response.data.token;
				id = response.data.id;

				console.log(response.data);
				ReactSession.set('token', token);
				ReactSession.set('currentUserId', id);
				alert('success', 'successfully logged in');

				http.get('/login/id/' + id)
					.then((response) => {
						ReactSession.set(
							'userRole',
							response.data.role_name[0].role_name
						);
					})
					.catch(function (err) {
						console.log(err);
					});

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
			console.log(err);
			return window.location.reload();
		});
};

export const register = (formData) => {
	const { name, lastname, email, password, role } = formData;
	console.log(formData);
	http.post('/signup', {
		firstName: name,
		lastName: lastname,
		email: email,
		password: password,
		role: [role],
	})
		.then((res) => {
			// TODO signup
			alert('success', 'successfully signed up');

			return res.status === 200
				? (window.location = '/login')
				: alert('danger', 'failed to sign up...');
		})
		.catch(function (err) {
			console.log(err);
			alert('danger', 'failed to sign up...');

			//	return window.location.reload();
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
