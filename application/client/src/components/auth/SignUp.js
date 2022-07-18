import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { register } from '../../js/auth';

import { getToken } from '../../js/useToken';

const SignUp = () => {
	const [formData, setFormData] = useState({
		name: '',
		lastname: '',
		email: '',
		password: '',
		password2: '',
		role: '',
	});

	const { name, lastname, email, password, password2, role } = formData;
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
		console.log(formData);
		register(formData);
		// }
	};

	// redirect if logged in
	if (getToken()) {
		return <Navigate to='/' />;
	}

	return (
		<>
			<div className='auth'>
				<div className='form-child form-background'>
					<div className='form-left text-center'>
						<h1 className='heading-primary'>
							Welcome <span className='text-warning'>Gators</span>
							!
						</h1>
						<p className='heading-secondary'>
							To stay connected with us please log in with your
							account details
						</p>
						<a
							className='create-btn'
							type='button'
							value='Sign In'
							href='/login'
						>
							Sign In
						</a>
					</div>

					<div className='form-overlay'></div>
				</div>
				<div className='form-child signin-form'>
					<form onSubmit={(e) => onSubmit(e)}>
						<h1>
							<b>Sign Up</b>
						</h1>
						<div className='name-group'>
							<div className='firstName'>
								<label
									className='signup-label'
									htmlFor='firstName'
								>
									First Name
								</label>
								<input
									className='form-control'
									type='text'
									placeholder='FirstName'
									name='name'
									value={name}
									onChange={(e) => onChange(e)}
									required
								/>
							</div>
							<div className='lastName'>
								<label
									className='signup-label'
									htmlFor='LastName'
								>
									Last Name
								</label>
								<input
									className='form-control'
									type='text'
									placeholder='Lastname'
									name='lastname'
									value={lastname}
									onChange={(e) => onChange(e)}
									required
								/>
							</div>
						</div>

						<div className='form-group'>
							<label className='signup-label' htmlFor='email'>
								Email Address
							</label>
							<input
								className='form-control'
								type='email'
								placeholder='Email Address'
								name='email'
								value={email}
								onChange={(e) => onChange(e)}
								required
							/>
						</div>
						<div className='pass-group'>
							<div className='password'>
								<label
									className='signup-label'
									htmlFor='password'
								>
									Password
								</label>
								<input
									className='form-control'
									type='password'
									placeholder='Password'
									name='password'
									// minLength='6'
									value={password}
									onChange={(e) => onChange(e)}
									required
								/>
							</div>
							<div className='confirm-pass'>
								<label
									className='signup-label'
									htmlFor='confirmPassword'
								>
									Confirm Password
								</label>
								<input
									className='form-control'
									type='password'
									placeholder='Confirm password'
									name='password2'
									// minLength='6'
									value={password2}
									onChange={(e) => onChange(e)}
									required
								/>
							</div>
						</div>

						<div>
							<div className='who-check'>
								<label className='who-label' htmlFor='who-btns'>
									Who are you?
								</label>
								<input
									type='checkbox'
									id='student'
									name='role'
									value='student'
									onChange={(e) => onChange(e)}
								/>
								<label className='who-input' htmlFor='student'>
									{' '}
									Student
								</label>
								<input
									type='checkbox'
									id='professor'
									name='role'
									value='professor'
									onChange={(e) => onChange(e)}
								/>
								<label
									className='who-input'
									htmlFor='professor'
								>
									{' '}
									Professor
								</label>
								<input
									type='checkbox'
									id='tutor'
									name='role'
									value='tutor'
									onChange={(e) => onChange(e)}
								/>
								<label className='who-input' htmlFor='tutor'>
									{' '}
									Tutor
								</label>
							</div>
							<ul className='list-inline'>
								<li className='policy'>
									<input
										className='form-check-input mt-1'
										type='checkbox'
										name='agreement'
										value={true}
										onChange={(e) => onChange(e)}
										required
										// onChange='validateAgreement(event.target)'
									/>
									<a className='policy-link' href='/rules'>
										Agree to Terms & Conditions
									</a>
								</li>
								<li>
									<button
										className='signup-btn'
										type='submit'
										value='Sign Up'
									>
										Sign Up
									</button>
								</li>
							</ul>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default SignUp;
