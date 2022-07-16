import React from 'react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { getToken } from '../../js/useToken';

const CreatePost = () => {
	// redirect if not logged in
	if (!getToken()) {
		return <Navigate to='/login' />;
	}

	const [formData, setFormData] = useState({
		title: '',
		description: '',
		link: '',
		image: '',
		category: '',
	});

	const { title, description, link, image, category } = formData;

	const onChange = (e) =>
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
			[e.target.lastname]: e.target.value,
		});

	const onSubmit = async (e) => {
		e.preventDefault();
		// if (password !== password2) {
		// 	console.log('passwords do not match', 'danger');
		// } else {

		// }
	};

	return (
		<>
			<div className='create'>
				<h1 className='text-secondary'>Create Post</h1>
				<p className='lead'>
					<i class='fa-solid fa-image'></i> Publish a New Post
				</p>
				<form className='form' onSubmit={(e) => onSubmit(e)}>
					<div className='form-group'>
						<input
							className='form-control'
							type='text'
							size={50}
							placeholder='Title'
							name='title'
							value={title}
							onChange={(e) => onChange(e)}
							// required
						/>
					</div>
					<div className='form-floating' id='descInput'>
						<textarea
							class='form-control'
							placeholder='Description'
						></textarea>
					</div>

					<div className='form-group'>
						<input
							className='form-control'
							type='text'
							size={50}
							placeholder='Link'
							name='link'
							value={link}
							onChange={(e) => onChange(e)}
							// required
						/>
					</div>

					<div class='mb-3'>
						<label for='formFile' class='form-label'>
							Default file input example
						</label>
						<input class='form-control' type='file' id='formFile' />
					</div>

					<div id='checkboxCreate'>
						<div class='form-check'>
							<input
								class='form-check-input'
								type='radio'
								name='flexRadioDefault'
								id='flexRadio1'
							/>
							<label class='form-check-label' for='flexRadio1'>
								Articles & Essays
							</label>
						</div>
						<div class='form-check'>
							<input
								class='form-check-input'
								type='radio'
								name='flexRadioDefault'
								id='flexRadio2'
							/>
							<label class='form-check-label' for='flexRadio2'>
								Art & Film
							</label>
						</div>
						<div class='form-check'>
							<input
								class='form-check-input'
								type='radio'
								name='flexRadioDefault'
								id='flexRadio3'
							/>
							<label class='form-check-label' for='flexRadio3'>
								Clubs
							</label>
						</div>
						<div class='form-check'>
							<input
								class='form-check-input'
								type='radio'
								name='flexRadioDefault'
								id='flexRadio4'
								checked
							/>
							<label class='form-check-label' for='flexRadio4'>
								Discords
							</label>
						</div>
						<div class='form-check'>
							<input
								class='form-check-input'
								type='radio'
								name='flexRadioDefault'
								id='flexRadio5'
								checked
							/>
							<label class='form-check-label' for='flexRadio5'>
								Tutoring
							</label>
						</div>
						<div class='form-check'>
							<input
								class='form-check-input'
								type='radio'
								name='flexRadioDefault'
								id='flexRadio6'
								checked
							/>
							<label class='form-check-label' for='flexRadio6'>
								Other
							</label>
						</div>
					</div>

					<input
						type='submit'
						className='btn btn-primary'
						value='Post'
					/>
					<div></div>
				</form>
			</div>
		</>
	);
};

export default CreatePost;
