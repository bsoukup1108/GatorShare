import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { login } from "../../js/auth";
import { getToken } from "../../js/useToken";
import { ReactSession } from "react-client-session";

const Login = (props) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(props.isAuthenticated);
  const { isAuthenticated } = props;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
  if (ReactSession.get("token")) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div class="auth">
        <div class="signin-child signin-background">
          <div class="signin-left text-center">
            <h1 class="heading-primary">Hello, <span class="text-warning">Gators</span>!</h1>
            <p class="heading-secondary">
			Enter your personal details and start your journey with us
            </p>
			<button class="create-btn" type="button" value="Sign Up">
                Create Account
              </button>
          </div>

          <div class="signin-overlay"></div>
        </div>
        <div class="signin-child signin-form">
          <form action="#">
            <h1>
              <b>Sign In</b>
            </h1>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                class="form-control"
                type="text"
                name="email"
                id="email"
				placeholder="johnnyappleseed@gmail.com"
				value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                class="form-control"
                type="text"
                name="password"
                id="password"
                placeholder="********"
				 // minLength='6'
				 value={password}
				 onChange={(e) => onChange(e)}
                required
              />
            </div>

            <div>
              <ul class="list-inline">
			  <li>
                  <a class="forgotpass-link" href="#">
                    Forgot your password?
                  </a>
                </li>
                <li>
				<button class="signin-btn" type="button" value="Sign In">
                Sign In
              </button>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="auth">
		<div class="auth-child">
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

            <p class="forgot-pass">Forgot your password?</p>

            <button class="submit" type="button" value="Sign In">
              Sign In
            </button>
			
  
  
          </div>
          <div class="left-content">
            <div class="cont">
              <h1>
                Hello, <span class="text-warning">Gators</span>!
              </h1>
              <p>Enter your personal details and start your journey with us</p>
              <button class="create" type="button" value="Sign In">
                Create Account
              </button>
            </div>
			<div class="signup-overlay"></div>
          </div>
        </div>
		</div>
      </div> */}
    </>
  );
};

export default Login;
