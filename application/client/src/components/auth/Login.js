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

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

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
				<div className='signin-child signin-background'>
					<div className='signin-left text-center'>
						<h1 className='heading-primary'>
							Hello, <span className='text-warning'>Gators</span>!
						</h1>
						<p className='heading-secondary'>
							Enter your personal details and start your journey
							with us
						</p>
						<button
							className='create-btn'
							type='button'
							value='Sign Up'
						>
							Create Account
						</button>
					</div>

					<div className='signin-overlay'></div>
				</div>
				<div className='signin-child signin-form'>
					<form className='form' onSubmit={(e) => onSubmit(e)}>
						<h1>
							<b>Sign In</b>
						</h1>

						<div className='form-group'>
							<label htmlFor='email'>Email Address</label>
							<input
								className='form-control'
								type='text'
								name='email'
								id='email'
								placeholder='johnnyappleseed@gmail.com'
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
								id='password'
								// placeholder='********'
								// minLength='6'
								value={password}
								onChange={(e) => onChange(e)}
								required
							/>
						</div>

						<div>
							<ul className='list-inline'>
								<li>
									<a className='forgotpass-link' href='#'>
										Forgot your password?
									</a>
								</li>
								<li>
									<input
										type='submit'
										className='signin-btn'
										value='Sign In'
									/>
								</li>
							</ul>
						</div>
					</form>
				</div>
			</div>
			{/* <div className="auth">
		<div className="auth-child">
        <div className="right-content">
          <div className="form" onSubmit={(e) => onSubmit(e)}>
            <h2>
              <b>Sign In</b>
            </h2>
            <label>
              <span>
                <b>Email Address</b>
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => onChange(e)}
                // required
              />
            </label>

            <label>
              <span>
                <b>Password</b>
              </span>
              <input
                type="password"
                // minLength='6'
                value={password}
                onChange={(e) => onChange(e)}
              />
            </label>

            <p className="forgot-pass">Forgot your password?</p>

            <button className="submit" type="button" value="Sign In">
              Sign In
            </button>
			
  
  
          </div>
          <div className="left-content">
            <div className="cont">
              <h1>
                Hello, <span className="text-warning">Gators</span>!
              </h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="create" type="button" value="Sign In">
                Create Account
              </button>
            </div>
			<div className="signup-overlay"></div>
          </div>
        </div>
		</div>
      </div> */}
		</>
	);
};

export default Login;
