import React from 'react';
import noImage from '../../img/noImage.jpeg';
import Sfsu from '../../img/sfsu1.png';
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
						
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeImage;
