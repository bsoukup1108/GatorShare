import React from 'react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { getToken } from '../../js/useToken';
import { createPost } from '../../js/post';

const CreatePost = () => {
	// redirect if not logged in
	if (!getToken()) {
		return <Navigate to='/login' />;
	}

	const [formData, setFormData] = useState({
		title: '',
		description: '',
		// link: '',
		// image: '',
		// category: '',
	});

	const { title, description, link, image, category } = formData;

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
			[e.target.lastname]: e.target.value,
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		createPost(formData);
	};

	return (
		<>
			<div id='createPostWrapper'>
				<div className='create'>
					<h1 className='text-secondary'>Create Post</h1>
					<h2 className='lead'>
						<i className='fa-solid fa-image'></i> Publish a New Post
					</h2>
					<form className='form' onSubmit={(e) => onSubmit(e)}>
						<div className='form-group'>
							<label className='group-label' htmlFor='title'>
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
								id='formFile'
								name='image'
								value={image}
								onChange={(e) => onChange(e)}
							/>
						</div>

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
						<input
							className='signin-btn'
							type='submit'
							value='Post'
						/>

						<div></div>
					</form>
				</div>
			</div>
		</>
	);
};

export default CreatePost;
