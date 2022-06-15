import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Fragment>
			<nav class='navbar sticky-top navbar-expand-lg navbar-light bg-light border-bottom'>
				<a class='navbar-brand' href='/'>
					<i class='fa-solid fa-people-group'> We don't know yet</i>
				</a>
				<ul>
					<li className='btn btn-primary'>
						<Link to='/'>home</Link>
					</li>
					<li className='btn btn-primary'>
						<Link to='/about'>about</Link>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

export default Navbar;
