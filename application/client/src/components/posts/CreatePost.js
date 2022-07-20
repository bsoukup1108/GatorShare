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
								id='formFile'
								name='image'
								value={image}
								onChange={(e) => onChange(e)}
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
