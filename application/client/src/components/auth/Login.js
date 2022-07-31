import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { login } from '../../js/auth';
import { ReactSession } from 'react-client-session';

const Login = () => {
	// redirect if logged in
	if (ReactSession.get('token')) {
		return <Navigate to='/' />;
	}

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});

	const onSubmit = (e) => {
		e.preventDefault();
		document.getElementById('login-btn-1').style.visibility = 'hidden';
		login(formData);
	};

	return (
		<>
			<div className='auth'>
				<div className='form-child form-background'>
					<div className='form-left text-center'>
						<h1 className='heading-primary'>
							Hello, <span className='text-warning'>Gators</span>!
						</h1>
						<p className='heading-secondary'>
							Enter your personal details and start your journey
							with us
						</p>
						<a
							className='create-btn'
							type='button'
							value='Sign In'
							href='/signup'
						>
							Create Account
						</a>
					</div>

					<div className='form-overlay'></div>
				</div>
				<div className='form-child signin-form'>
					<form onSubmit={(e) => onSubmit(e)}>
						<h1>
							<b>Sign In</b>
						</h1>

						<div className='form-group'>
							<label htmlFor='email'>Email Address</label>
							<input
								className='form-control'
								type='email'
								name='email'
								placeholder='Email Address'
								id='email'
								value={email}
								onChange={(e) => onChange(e)}
								required
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='password'>Password</label>
							<input
								className='form-control'
								type='password'
								name='password'
								placeholder='Password'
								id='password'
								// minLength='6'
								value={password}
								onChange={(e) => onChange(e)}
								required
							/>
						</div>

						<div>
							<ul className='list-inline'>
								<li>
									<a
										className='forgotpass-link'
										href='/signup'
									>
										Forgot your password?
									</a>
								</li>
								<li>
									<button
										id='login-btn-1'
										className='form-btn '
										type='submit'
										value='Sign In'
									>
										Sign In
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

export default Login;
