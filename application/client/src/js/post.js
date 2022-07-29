import { ReactSession } from 'react-client-session';
import http from '../http-common-2';
import { alert } from './alert';

export const createPost = (formData) => {
	const { title, description, link, Image, category } = formData;
	console.log(formData);
	http.post(
		'/post?Descrption=dfvvd&Likes=22&postTitle=fvvfv&Tag=ccdddddddc',
		{}
	)
		.then((response) => {
			document.getElementById('create-btn-post').style.visibility =
				'hidden';
			if (response.status === 200) {
				window.location = '/posts';
			} else {
				// TODO errors
				console.log('create post error');
				return null;
			}
		})
		.catch(function (err) {
			document.getElementById('create-btn-post').style.visibility =
				'visible';

			console.log(err);

			//return window.location.reload();
		});
};
