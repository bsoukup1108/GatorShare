import { ReactSession } from 'react-client-session';
import http from '../http-common';
import { alert } from './alert';

export const createPost = (formData) => {
	const { title, description } = formData;

	alert(
		'success',
		'post has been successfully created. You will see it in milestone 4!'
	);
	http.post('/post', {
		title: title,
		description: description,
	})
		.then((response) => {
			document.getElementById('create-btn-post').style.visibility =
				'hidden';
			// if (response.status === 200) {
			window.location = '/posts';
			alert(
				'success',
				'post has been successfully created. You will see it in milestone 4!'
			);

			// } else {
			// 	// TODO errors
			// 	console.log('create post error');
			// 	return null;
			// }
		})
		.catch(function (err) {
			document.getElementById('create-btn-post').style.visibility =
				'hidden';
			window.location = '/posts';

			console.log(err);

			//return window.location.reload();
		});
};
