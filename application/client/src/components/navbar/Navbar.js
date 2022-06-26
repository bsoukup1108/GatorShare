import React  from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

const Navbar = () => {
	return (
		<>
			<nav class='navbar sticky-top navbar-expand-lg navbar-light bg-light border-bottom'>
				<div id='logo-content'>
					<a class='navbar-brand' href='/'>
						<img id='logo' src={logo} alt='logo' />
					</a>{' '}
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
		</>
	);
};

export default Navbar;
