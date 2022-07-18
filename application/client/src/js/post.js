import { ReactSession } from 'react-client-session';
import http from '../http-common';

export const createPost = (formData) => {
	const { title, description } = formData;
	http.post('/post', {
		title: title,
		description: description,
	})
		.then((response) => {
			console.log(response);
			// if (response.status === 200) {
			// 	window.location = '/posts';
			// } else {
			// 	// TODO errors
			// 	console.log('create post error');
			// 	return null;
			// }
		})
		.catch(function (err) {
			console.log(err);
			//return window.location.reload();
		});
};
