import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import handleSearch from '../../js/search';

import logo from '../../img/logo.png';
import { getToken } from '../../js/useToken';
import { logout } from '../../js/auth';

const Navbar = (props) => {
	const { isAuthenticated } = props;

	const navigate = useNavigate();
	// const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());
	const authLinks = (
		<>
			<div>
				<button type='button' className='btn btn-secondary'>
					<Link to='/posts'>
						<i className='fa-solid fa-rectangle-list'></i>{' '}
						<span id='posts-content'></span>
					</Link>
				</button>
				<button type='button' className='btn btn-secondary'>
					<Link to='/create'>
						<i className='fa-solid fa-plus '></i>
						<span id='create-content'></span>
					</Link>
				</button>
				<button type='button' className='btn btn-secondary'>
					<Link to='/messages'>
						<i className='fa-solid fa-message'></i>
						<span id='messages-content'></span>
					</Link>
				</button>
			</div>
			<div className='dropdown me-1 '>
				<a
					className='btn btn-secondary dropdown-toggle'
					href='/#'
					role='button'
					id='dropdownMenuLink'
					data-bs-toggle='dropdown'
					aria-expanded='false'
				>
					<i className='fa-solid fa-bell '></i>
				</a>

				<ul
					className='dropdown-menu dropdown-menu-end'
					aria-labelledby='dropdownMenuOffset'
				>
					<li>
						<a className='dropdown-item' href='/login'>
							You don't have any notifications
						</a>
					</li>
				</ul>
			</div>

			<div className='dropdown me-1'>
				<a
					className='btn btn-secondary dropdown-toggle'
					href='/#!'
					role='button'
					id='dropdownMenuLink'
					data-bs-toggle='dropdown'
					aria-expanded='false'
				>
					<i className='fas fa-user  '></i>
				</a>

				<ul
					className='dropdown-menu dropdown-menu-end'
					aria-labelledby='dropdownMenuOffset'
				>
					<li>
						<a className='dropdown-item' href='/profile'>
							<i className='fa-solid fa-user '></i> Profile
						</a>
					</li>
					<li>
						<a
							className='dropdown-item'
							onClick={() => logout()}
							href='/login'
						>
							<i className='fas fa-sign-out-alt '></i>{' '}
							<span className='hide-sm'>Logout</span>
						</a>
					</li>
				</ul>
			</div>
		</>
	);
	const guestLinks = (
		<>
			<div>
				<button type='button' className='btn btn-secondary'>
					<Link to='/posts'>
						<i className='fa-solid fa-rectangle-list'></i>{' '}
						<span id='posts-content'></span>
					</Link>
				</button>
			</div>
			<div className='dropdown me-1 '>
				<a
					className='btn btn-secondary dropdown-toggle'
					href='/#'
					role='button'
					id='dropdownMenuLink'
					data-bs-toggle='dropdown'
					aria-expanded='false'
				>
					<i className='fa-solid fa-bell '></i>
				</a>

				<ul
					className='dropdown-menu dropdown-menu-end'
					aria-labelledby='dropdownMenuOffset'
				>
					<li>
						<a className='dropdown-item' href='/login'>
							You must sign in to see notifications
						</a>
					</li>
				</ul>
			</div>
			<div className='dropdown me-1'>
				<a
					className='btn btn-secondary dropdown-toggle'
					href='/#'
					role='button'
					id='dropdownMenuLink'
					data-bs-toggle='dropdown'
					aria-expanded='false'
				>
					<i className='fas fa-user  '></i>
				</a>

				<ul
					className='dropdown-menu dropdown-menu-end'
					aria-labelledby='dropdownMenuOffset'
				>
					<li>
						<a className='dropdown-item' href='/login'>
							<i className='fa-solid fa-arrow-right-to-bracket '></i>{' '}
							Log In
						</a>
					</li>
					<li>
						<a className='dropdown-item' href='/signup'>
							<i className='fa-solid fa-user-plus '></i> Sign Up
						</a>
					</li>
				</ul>
			</div>
		</>
	);

	return (
		<nav className='navbar sticky-top navbar-light bg-light border-bottom gradient-hor bg-pan-right flex-center'>
			<div id='logo-content'>
				<a className='navbar-brand' href='/'>
					<img id='logo' src={logo} alt='logo' />
				</a>{' '}
			</div>
			<div id='searchBar'>
				<div className='container-fluid'>
					<form className='d-flex'>
						<input
							id='search-text'
							className='form-control me-2'
							type='text'
							placeholder='Search'
						/>
						<button
							id='search-button'
							className='btn btn-secondary'
							type='submit'
							onClick={() => {
								navigate('/search');
								return false;
							}}
						>
							<i className='fa-solid fa-magnifying-glass'></i>
						</button>
					</form>
				</div>
			</div>
			<div className='navbar-right'>
				{isAuthenticated ? authLinks : guestLinks}
			</div>
		</nav>
	);
};

export default Navbar;
