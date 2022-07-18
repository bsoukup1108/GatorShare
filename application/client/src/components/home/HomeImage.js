import React from 'react';
import noImage from '../../img/noImage.jpeg';
import Sfsu from '../../img/sfsu.jpeg';
import placeholderhome from '../../img/placeholderhome.jpeg';

const HomeImage = () => {
	return (
		<>
			<div class='container1'>
				{' '}
				<img src={Sfsu}></img>
				<div class='gradient-hor bg-pan-right flex-center-1'>
					<div class='content'>
						<h4>HOOK</h4>
						<p>
							<a href='#!'>Log in</a>
						</p>
						<p>
							<a href='#!'>Sign Up</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeImage;
