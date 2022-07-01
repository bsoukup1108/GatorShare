import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import handleSearch from '../../js/search';

import logo from '../../img/logo.png';

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light border-bottom'>
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
							<i className='fa-solid fa-magnifying-glass'></i>{' '}
						</button>
					</form>
				</div>
			</div>

			<ul>
				<li className='btn btn-primary'>
					<Link to='/'>home</Link>
				</li>
				<li className='btn btn-primary'>
					<Link to='/about'>about</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
