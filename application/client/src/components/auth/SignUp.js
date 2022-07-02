import React from 'react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const isAuthenticated = false;

const SignUp = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formData;

	const onChange = (e) =>
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});

	const onSubmit = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			console.log('passwords do not match', 'danger');
		} else {
			console.log(formData);
		}
	};

	// redirect if logged in
	if (isAuthenticated) {
		return <Navigate to='/' />;
	}

	return (
		<>
			<div className='auth'>
				<h1 className='text-secondary'>Sign Up</h1>
				<p className='lead'>
					<i className='fas fa-user '></i> Create Your Account
				</p>
				<form className='form' onSubmit={(e) => onSubmit(e)}>
					<div className='form-group'>
						<input
							className='form-control'
							type='text'
							placeholder='Name'
							name='name'
							value={name}
							onChange={(e) => onChange(e)}
							// required
						/>
					</div>
					<div className='form-group'>
						<input
							className='form-control'
							type='email'
							placeholder='Email Address'
							name='email'
							value={email}
							onChange={(e) => onChange(e)}
							// required
						/>
					</div>
					<div className='form-group'>
						<input
							className='form-control'
							type='password'
							placeholder='Password'
							name='password'
							// minLength='6'
							value={password}
							onChange={(e) => onChange(e)}
						/>
					</div>
					<div className='form-group'>
						<input
							className='form-control'
							type='password'
							placeholder='Confirm Password'
							name='password2'
							value={password2}
							onChange={(e) => onChange(e)}
							// minLength='6'
						/>
					</div>
					<div id='agreement' className='form-group '>
						<input
							className='form-check-input mt-1'
							type='checkbox'
							name='agreement'
							required
							onchange='validateAgreement(event.target)'
						/>
						<label for='agreement'>
							<p>
								<a href='#!'>Agree to Privacy Rules</a>
							</p>
						</label>
					</div>

					<input
						type='submit'
						className='btn btn-primary'
						value='Register'
					/>
				</form>
				<p className='my-1'>
					Already have an account? <Link to='/login'>Sign In</Link>
				</p>
			</div>
		</>
	);
};

export default SignUp;
