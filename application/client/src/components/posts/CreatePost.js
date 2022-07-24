import React from 'react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { getToken } from '../../js/useToken';
import { createPost } from '../../js/post';
import { alert } from '../../js/alert';

const CreatePost = () => {
	//redirect if not logged in
	if (!getToken()) {
		return <Navigate to='/login' />;
	}

	const [formData, setFormData] = useState({
		title: 'www',
		description: 'www',
		// link: '',
		// image: '',
		image64: '',
		// category: 'OTHER',
	});

	const { title, description, link, image, category } = formData;

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		console.log(formData);
	};

	const onImageUpload = (e) => {
		let file = e.target.files[0];
		console.log(file);
		//let img = await getBase64(file).then((data) => data.toString());
		setFormData({
			...formData,
			image64: file,
		});
	};

	const decodeBase64 = (file) => {
		const i = String(file.indexOf('base64,'));
		const buffer = Buffer.from(file.slice(i + 7), 'base64');
		const name = `${Math.random().toString(36).slice(-5)}.png`;
		const file1 = new File(buffer, name);
	};

	const getBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		createPost(formData);
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
							<label className='form-label' htmlFor='title'>
								Add title
							</label>
							<input
								className='form-control'
								type='text'
								placeholder='Title'
								name='title'
								value={title}
								onChange={(e) => onChange(e)}
								// required
							/>
						</div>
						<div className='' id='descInput'>
							<label className='form-label' htmlFor='description'>
								Add description
							</label>
							<textarea
								className='form-control'
								placeholder='Description'
								name='description'
								value={description}
								onChange={(e) => onChange(e)}
							></textarea>
						</div>

						<div className='form-group'>
							<label className='form-label' htmlFor='link'>
								Add a link
							</label>
							<input
								className='form-control'
								type='link'
								placeholder='Link'
								name='link'
								value={link}
								onChange={(e) => onChange(e)}
								// required
							/>
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
									name='category'
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
									name='category'
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
									name='category'
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
									name='category'
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
									name='category'
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
									name='category'
									id='flexRadio6'
									value='Other'
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
						<button
							id='create-btn-post'
							className='createpost-btn'
							type='submit'
							value='Post'
						>
							Post
						</button>

						<div></div>
					</form>
				</div>
			</div>
		</>
	);
};

export default CreatePost;
