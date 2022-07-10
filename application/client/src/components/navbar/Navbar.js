import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import handleSearch from '../../js/search';

import logo from '../../img/logo.png';
const isAuthenticated = true;

const Navbar = () => {
	const navigate = useNavigate();

	const authLinks = (
		<>
			<ul>
				<li className='btn btn-secondary'>
					<Link to='/'>
						<i className='fa-solid fa-house'></i>
						<span id='home-content'></span>
					</Link>
				</li>
				<li className='btn btn-secondary'>
					<Link to='/about'>
						<i className='fa-solid fa-circle-info'></i>
						<span id='about-content'></span>
					</Link>
				</li>
				<li className='btn btn-secondary'>
					<Link to='/testsignUp'>
						<i className='fa-solid fa-plus'></i>
						<span id='create-content'></span>
					</Link>
				</li>
				<li className='btn btn-secondary'>
					<Link to='/posts'>
						<i class='fa-solid fa-rectangle-list'></i>{' '}
						<span id='posts-content'></span>
					</Link>
				</li>
				<li className='btn btn-secondary'>
					<Link to='/testlogin'>
						<i class='fa-solid fa-rectangle-list'></i>{' '}
						<span id='posts-content'></span>
					</Link>
				</li>
				<li className='btn btn-secondary'>
					<Link to='/create'>
						<i className='fa-solid fa-plus '></i>
						<span id='create-content'></span>
					</Link>
				</li>
			</ul>
			<div>
				<button type='button' class='btn btn-secondary'>
					<Link to='/messages'>
						<i class='fa-solid fa-message'></i>
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
							onClick={console.log('logout')}
							href='/!#'
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
			<ul>
				<li className='btn btn-secondary'>
					<Link to='/'>
						<i className='fa-solid fa-house '></i>
						<span id='home-content'></span>
					</Link>
				</li>
				<li className='btn btn-secondary'>
					<Link to='/about'>
						<i className='fa-solid fa-circle-info '></i>
						<span id='about-content'></span>
					</Link>
				</li>
				<li className='btn btn-secondary'>
					<Link to='/posts'>
						<i class='fa-solid fa-rectangle-list'></i>{' '}
						<span id='posts-content'></span>
					</Link>
				</li>
			</ul>
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
		<nav className='navbar sticky-top navbar-light bg-light border-bottom'>
			<div id='logo-content'>
				<a className='navbar-brand' href='/'>
					<img id='logo' src={logo} alt='logo' />
				</a>{' '}
			</div>
			<div id='searchBar'>
				<div className='container-fluid'>
					<form className='d-flex' onSubmit={handleSearch}>
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
