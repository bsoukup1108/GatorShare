import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { register } from '../../js/auth';
import { getToken } from '../../js/useToken';
import {
	validateUsername,
	validateUserLastname,
	validateEmail,
	validatePassword,
	validatePassword2,
	validateRole,
	registrationValidation,
} from '../../js/hint';

const SignUp = () => {
	// redirect if logged in
	if (getToken()) {
		return <Navigate to='/' />;
	}

	const [formData, setFormData] = useState({
		name: '',
		lastname: '',
		email: '',
		password: '',
		password2: '',
		role: '',
	});

	const { name, lastname, email, password, password2 } = formData;
	const onChange = (e) =>
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});

	const onSubmit = async (e) => {
		e.preventDefault();

		registrationValidation()
			? register(formData)
			: alert('the information is not valid');
	};

	return (
		<>
			<div className='auth'>
				<div className='form-child form-background'>
					<div id='hint-username-1'>
						<div
							id='username-hint-1'
							class='alert alert-secondary text-muted '
						>
							Contains only letters
						</div>
						<div
							id='username-hint-2'
							class='alert alert-secondary text-muted'
						>
							At least 3 characters
						</div>
					</div>

					<div id='hint-username-2'>
						<div
							id='username-hint-3'
							class='alert alert-secondary text-muted '
						>
							Contains only letters
						</div>
						<div
							id='username-hint-4'
							class='alert alert-secondary text-muted'
						>
							At least 3 characters
						</div>
					</div>
					<div id='hint-username-3'>
						<div
							id='username-hint-5'
							class='alert alert-secondary text-muted '
						>
							Is email
						</div>
					</div>
					<div id='hint-username-4'>
						<div
							id='username-hint-6'
							class='alert alert-secondary text-muted '
						>
							At least 8 characters
						</div>
						<div
							id='username-hint-11'
							class='alert alert-secondary text-muted '
						>
							contains a special character
						</div>
						<div
							id='username-hint-7'
							class='alert alert-secondary text-muted '
						>
							contains lowercase
						</div>
						<div
							id='username-hint-8'
							class='alert alert-secondary text-muted '
						>
							contains uppercase
						</div>
						<div
							id='username-hint-9'
							class='alert alert-secondary text-muted '
						>
							contains a number
						</div>

						<div id='hint-username-5'>
							<div
								id='username-hint-10'
								class='alert alert-secondary text-muted '
							>
								passwords should match
							</div>
						</div>
						<div id='hint-username-6'>
							<div
								id='username-hint-11'
								class='alert alert-secondary text-muted '
							>
								should agree
							</div>
						</div>
					</div>

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
					<form id='form-signup-1' onSubmit={(e) => onSubmit(e)}>
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
									id='sign-up-fn-1'
									className='form-control'
									type='text'
									placeholder='FirstName'
									name='name'
									value={name}
									onChange={(e) => onChange(e)}
									onInput={(e) =>
										validateUsername(e.target.value)
									}
									minLength={3}
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
									id='sign-up-ln-1'
									className='form-control'
									type='text'
									placeholder='LastName'
									name='lastname'
									value={lastname}
									onChange={(e) => onChange(e)}
									onInput={(e) =>
										validateUserLastname(e.target.value)
									}
									minLength={3}
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
								id='sign-up-em-1'
								placeholder='Email Address'
								name='email'
								value={email}
								onChange={(e) => onChange(e)}
								onInput={(e) => validateEmail(e.target.value)}
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
									id='signup-password'
									className='form-control'
									type='password'
									placeholder='Password'
									name='password'
									// minLength='6'
									value={password}
									onChange={(e) => onChange(e)}
									onInput={(e) =>
										validatePassword(e.target.value)
									}
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
									id='signup-password-2'
									className='form-control'
									type='password'
									placeholder='Confirm Password'
									name='password2'
									// minLength='6'
									value={password2}
									onChange={(e) => onChange(e)}
									onInput={(e) =>
										validatePassword2(e.target.value)
									}
									required
								/>
							</div>
						</div>

						<div>
							<div className='who-check'>
								<label className='who-label' htmlFor='who-btns'>
									Who are you?
								</label>{' '}
								<div className='who-radio'>
									<input
										type='radio'
										id='student'
										name='role'
										value='Student'
										onChange={(e) => {
											validateRole(e.target.value);
											onChange(e);
										}}
									/>
									<label
										className='who-input'
										htmlFor='student'
									>
										{' '}
										Student
									</label>{' '}
								</div>
								<div className='who-radio'>
									<input
										type='radio'
										id='professor'
										name='role'
										value='Professor'
										onChange={(e) => {
											validateRole(e.target.value);
											onChange(e);
										}}
									/>
									<label
										className='who-input'
										htmlFor='professor'
									>
										Professor
									</label>
								</div>
								<div className='who-radio'>
									<input
										type='radio'
										id='tutor'
										name='role'
										value='Tutor'
										onChange={(e) => {
											validateRole(e.target.value);
											onChange(e);
										}}
									/>
									<label
										className='who-input'
										htmlFor='tutor'
									>
										Tutor
									</label>
								</div>
							</div>
							<ul className='list-inline'>
								<li className='policy'>
									<input
										className='form-check-input mt-1'
										type='checkbox'
										name='agreement'
										value={true}
										//onChange={(e) => onChange(e)}
										required
										// onChange='validateAgreement(event.target)'
									/>
									<a className='policy-link' href='/rules'>
										Agree to Terms & Conditions
									</a>
								</li>
								<li>
									<button
										className='signup-btn '
										type='submit'
										value='Sign Up'
										id='signup-btn-1'
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
