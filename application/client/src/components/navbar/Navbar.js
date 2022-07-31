import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';
import { logout } from '../../js/auth';
import { ReactSession } from 'react-client-session';

const Navbar = (props) => {
	const { isAuthenticated } = props;
	const [category, setCategory] = useState('Category');

	const changeCategory = (e) => {
		e.preventDefault();
		let newCategory = e.target.value;
		setCategory(newCategory);
	};

	const setWhite = () => {
		let notif = document.getElementById('notif-nav-1');
		if (notif) {
			notif.setAttribute('class', 'dropdown me-1');
		}
	};

	const navigate = useNavigate();

	const authLinks = (
		<>
			<div className='navbar-right-2'>
				<button type='button' className='btn btn-secondary'>
					<Link to='/'>
						<i className='fa-solid fa-house '></i>
						<span id='home-content'></span>
					</Link>
				</button>
				<button type='button' className='btn btn-secondary'>
					<Link to='/posts'>
						<i className='fa-solid fa-rectangle-list'></i>{' '}
						<span id='posts-content'></span>
					</Link>
				</button>
				<button type='button' className='btn btn-secondary'>
					<Link to='/post'>
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
			<div
				className='dropdown me-1 '
				id='notif-nav-1'
				onClick={() => setWhite()}
			>
				<a
					className='btn btn-secondary dropdown-toggle'
					href='/#'
					role='button'
					id='dropdownMenuLink'
					data-bs-toggle='dropdown'
					aria-expanded='false'
				>
					<i className='fa-solid fa-bell ' id='dropdownBell'></i>
				</a>

				<ul
					className='dropdown-menu dropdown-menu-end'
					aria-labelledby='dropdownMenuOffset'
				>
					<li>
						<div
							className='dropdown-item'
							id='notifications-1'
							onClick={() => (window.location = '/messages')}
						>
							<p>You don't have any notifications yet</p>
						</div>
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
					<i className='fas fa-user  '></i> Account
				</a>

				<ul
					className='dropdown-menu dropdown-menu-end'
					aria-labelledby='dropdownMenuOffset'
				>
					<li>
						<a
							id='dropdown-user-icon'
							className='dropdown-item'
							href='/profile'
						>
							<i className='fa-solid fa-user'></i> Profile
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
			<div className='navbar-right-2'>
				<button type='button' className='btn btn-secondary'>
					<Link to='/'>
						<i className='fa-solid fa-house '></i>
						<span id='home-content'></span>
					</Link>
				</button>
				<button type='button' className='btn btn-secondary'>
					<Link to='/posts'>
						<i className='fa-solid fa-rectangle-list'></i>{' '}
						<span id='posts-content'></span>
					</Link>
				</button>
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
					<i className='fas fa-user  '></i> Account
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
			<div id='navbar-left-1'>
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
								placeholder='Search for posts (example: Society of Women Engineers Club)'
							/>
							<div className='btn-group dropdown me-1 '>
								<button
									className='btn btn-primary dropdown-toggle category-dropdown'
									data-bs-toggle='dropdown'
									name='Category'
									value={category}
									id='search-button-1'
								>
									{category}
								</button>

								<div className='dropdown-menu'>
									<div className='dropdown-divider'></div>
									<input
										type='button'
										href='#'
										className='dropdown-item'
										name='dropdown-all'
										value='All Posts'
										onClick={(e) => changeCategory(e)}
									/>
									<div className='dropdown-divider'></div>
									<input
										type='button'
										href='#'
										className='dropdown-item'
										value='Articles&Essays'
										onClick={(e) => changeCategory(e)}
									/>

									<div className='dropdown-divider'></div>
									<input
										type='button'
										href='#'
										className='dropdown-item'
										value='Art&Films'
										onClick={(e) => changeCategory(e)}
									/>

									<div className='dropdown-divider'></div>
									<input
										type='button'
										href='#'
										className='dropdown-item'
										value='Clubs'
										onClick={(e) => changeCategory(e)}
									/>

									<div className='dropdown-divider'></div>
									<input
										type='button'
										href='#'
										className='dropdown-item'
										value='Discords'
										onClick={(e) => changeCategory(e)}
									/>

									<div className='dropdown-divider'></div>
									<input
										type='button'
										href='#'
										className='dropdown-item'
										value='Tutoring'
										onClick={(e) => changeCategory(e)}
									/>

									<div className='dropdown-divider'></div>
									<input
										type='button'
										href='#'
										className='dropdown-item'
										value='Other'
										onClick={(e) => changeCategory(e)}
									/>

									<div className='dropdown-divider'></div>
								</div>
							</div>

							<button
								id='search-button'
								className='btn btn-secondary'
								type='submit'
								onClick={(e) => {
									let searchTerm =
										document.getElementById(
											'search-text'
										).value;
									ReactSession.set('searchTerm', searchTerm);
									ReactSession.set(
										'category',
										document.getElementById(
											'search-button-1'
										).value
									);
									navigate(`/search`);

									return false;
								}}
							>
								<i className='fa-solid fa-magnifying-glass'></i>
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className='navbar-right'>
				{isAuthenticated ? authLinks : guestLinks}
			</div>
		</nav>
	);
};

export default Navbar;
