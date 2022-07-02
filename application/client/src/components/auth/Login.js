import React from 'react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const isAuthenticated = false;

const Login = () => {
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
		console.log(formData);
	};

	// redirect if logged in
	if (isAuthenticated) {
		return <Navigate to='/' />;
	}

	return (
		<>
			<div className='auth'>
				<h1 className='text-secondary'>Sign In</h1>
				<p className='lead'>
					<i className='fas fa-user'></i> Sign Into Account
				</p>
				<form className='form' onSubmit={(e) => onSubmit(e)}>
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

					<input
						type='submit'
						className='btn btn-primary'
						value='Login'
					/>
				</form>
				<p className='my-1'>
					Don't have an account? <Link to='/signup'>Sign Up</Link>
				</p>
			</div>
		</>
	);
};

export default Login;
