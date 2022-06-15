import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Fragment>
			<nav className='navbar bg-light'>
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
