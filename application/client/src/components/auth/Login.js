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
      <div className="auth">
        <div className="form-child form-background">
          <div className="form-left text-center">
            <h1 className="heading-primary">
              Hello, <span className="text-warning">Gators</span>!
            </h1>
            <p className="heading-secondary">
            Enter your personal details and start your journey with us
            </p>
            <button className="create-btn" type="button" value="Sign In">
              Create Account
            </button>
          </div>

          <div className="form-overlay"></div>
        </div>
        <div className="form-child signin-form" onSubmit={(e) => onSubmit(e)}>
          <form action="#">
            <h1>
              <b>Sign In</b>
            </h1>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                className="form-control"
                type="email"
                name="email"
				placeholder='Email Address'
                id="email"
				value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="email"
                name="password"
				placeholder='Password'
                id="password"
				 // minLength='6'
				 value={password}
				 onChange={(e) => onChange(e)}
                required
              />
            </div>

            <div>
              <ul className="list-inline">
			  <li>
                  <a className="forgotpass-link" href="#">
                    Forgot your password?
                  </a>
                </li>
                <li>
				<button className="form-btn" type="button" value="Sign In">
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
