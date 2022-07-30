/**************************************************************
 * Class:  CSC-648 Summer 2022
 * Author: Aleksandr Gusev, Brianna Soukup
 * Project: Gatorshare website
 * File: CreatePost.js
 * Description: this file includes all functions required for creating a post
 **************************************************************/
import React from 'react';
import { useState } from 'react';
import { getToken } from '../../js/useToken';
import { Navigate } from 'react-router-dom';
import { ReactSession } from 'react-client-session';
import http from '../../http-form-data';
import { alert } from '../../js/alert';

const CreatePost = () => {
	//redirect if not logged in
	if (!getToken()) {
		return <Navigate to='/login' />;
	}

	const [formDataImg, setFormDataImg] = useState({
		image: null,
	});

	const userId = ReactSession.get('currentUserId');
	console.log(userId);
	const [formData, setFormData] = useState({
		userId: userId,
		postTitle: '',
		Descrption: '',
		likes: 0,
		tag: 'Other',
	});

	const { postTitle, Descrption } = formData;
	const { image } = formDataImg;

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onImageUpload = (e) => {
		let file = e.target.files[0];
		console.log(file);
		// setFormDataImg({
		// 	...formDataImg,
		// 	[e.target.name]: file,
		// });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		http.post('/post', formData)
			.then((response) => {
				console.log(formData);

				document.getElementById('create-btn-post').style.visibility =
					'hidden';
				if (response.status === 200) {
					//			let postId = response.data.id;
					alert('success', 'Post has been created');
					//	window.location = '/posts';
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

		// http.post('/post', formDataImg)
		// 	.then((response) => {
		// 		console.log(formDataImg);
		// 		if (response.status === 200) {
		// 			alert('success', 'Image has been uploaded');
		// 			window.location = '/posts';
		// 		} else {
		// 			// TODO errors
		// 			console.log('create post error');
		// 			return null;
		// 		}
		// 	})
		// 	.catch(function (err) {
		// 		console.log(err);

		// 		//return window.location.reload();
		// 	});
	};

	return (
		<>
			<div className='auth-create'>
				<div className='form-child signin-form' id='createPostWrapper'>
					<form className='form' onSubmit={(e) => onSubmit(e)}>
						<h1>
							<b>Create Post</b>
						</h1>
						<h2 className='lead'>
							<i className='fa-solid fa-image'></i> Publish a New
							Post
						</h2>
						<div className='form-group'>
							<label className='form-label' htmlFor='postTitle'>
								Add title
							</label>
							<input
								className='form-control'
								type='text'
								placeholder='Title'
								name='postTitle'
								value={postTitle}
								onChange={(e) => onChange(e)}
								required
							/>
						</div>
						<div className='' id='descInput'>
							<label className='form-label' htmlFor='Descrption'>
								Add description
							</label>
							<textarea
								className='form-control'
								placeholder='Description'
								name='Descrption'
								value={Descrption}
								onChange={(e) => onChange(e)}
								required
							></textarea>
						</div>

						<div className='mb-3'>
							<label className='form-label' htmlFor='image'>
								Upload a photo
							</label>

							<input
								className='form-control'
								type='file'
								accept='image/*'
								id='formFile'
								name='image'
								value={image}
								onInput={(e) => onImageUpload(e)}
							/>
						</div>
						<label className='form-label' htmlFor='image'>
							Pick a Genre
						</label>
						<div id='checkboxCreate'>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='tag'
									id='flexRadio1'
									value='Articles & Essays'
									onChange={(e) => onChange(e)}
								/>
								<label
									className='form-check-label'
									htmlFor='flexRadio1'
								>
									Articles & Essays
								</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='tag'
									id='flexRadio2'
									value='Art & Film'
									onChange={(e) => onChange(e)}
								/>
								<label
									className='form-check-label'
									htmlFor='flexRadio2'
								>
									Art & Film
								</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='tag'
									id='flexRadio3'
									value='Clubs'
									onChange={(e) => onChange(e)}
								/>
								<label
									className='form-check-label'
									htmlFor='flexRadio3'
								>
									Clubs
								</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='tag'
									id='flexRadio4'
									value='Discords'
									onChange={(e) => onChange(e)}
								/>
								<label
									className='form-check-label'
									htmlFor='flexRadio4'
								>
									Discords
								</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='tag'
									id='flexRadio5'
									value='Tutoring'
									onChange={(e) => onChange(e)}
								/>
								<label
									className='form-check-label'
									htmlFor='flexRadio5'
								>
									Tutoring
								</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='tag'
									id='flexRadio6'
									value='Other'
									checked
									onChange={(e) => onChange(e)}
								/>
								<label
									className='form-check-label'
									htmlFor='flexRadio6'
								>
									Other
								</label>
							</div>
						</div>
						<div id='create-post-btn-1'>
							<button
								id='create-btn-post'
								className='createpost-btn'
								type='submit'
								value='Post'
							>
								Post
							</button>
						</div>

						<div></div>
					</form>
				</div>
			</div>
		</>
	);
};

export default CreatePost;
