import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { login } from '../../js/auth';
import { getToken } from '../../js/useToken';
import { ReactSession } from 'react-client-session';

const Login = (props) => {
	// const [isAuthenticated, setIsAuthenticated] = useState(props.isAuthenticated);
	const { isAuthenticated } = props;

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
		login(formData);
	};

	// redirect if logged in
	if (ReactSession.get('token')) {
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
