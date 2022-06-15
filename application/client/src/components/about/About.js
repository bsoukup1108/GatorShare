import React, { Fragment } from 'react';

import aleksPic from '../../img/alex.jpg';

const About = () => {
	return (
		<Fragment>
			<h1>About our team</h1>

			<div class='accordion accordion-flush' id='accordionProfile'>
				<div class='accordion-item'>
					<button
						class='accordion-button collapsed'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#flush-collapseOne'
						aria-expanded='false'
						aria-controls='flush-collapseOne'
					>
						<h1>
							<strong>Aleksandr</strong> – 
							<i>Frontend developer</i>
						</h1>
					</button>

					<div
						id='flush-collapseOne'
						class='accordion-collapse collapse'
						aria-labelledby='flush-headingOne'
						data-bs-parent='#accordionProfile'
					>
						<img src={aleksPic} alt='pic' />

						<div class='accordion-body'>blah blah blah</div>
					</div>
				</div>
				{/* PERSON #2 */}
				<div class='accordion-item'>
					<h2 class='accordion-header' id='flush-headingTwo'>
						<button
							class='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#flush-collapseTwo'
							aria-expanded='false'
							aria-controls='flush-collapseTwo'
						>
							<h1>
								<strong>YOUR NAME</strong> – 
								<i>ROLE</i>
							</h1>
						</button>
					</h2>
					<div
						id='flush-collapseTwo'
						class='accordion-collapse collapse'
						aria-labelledby='flush-headingTwo'
						data-bs-parent='#accordionProfile'
					>
						{/* upload your pic to the img folder
					import it as in line 3
					change the namee below */}
						<img src={aleksPic} alt='pic' />
						<div class='accordion-body'>DESCRIPTION</div>
					</div>
				</div>
				{/* PERSON #3 */}
				<div class='accordion-item'>
					<h2 class='accordion-header' id='flush-headingTwo'>
						<button
							class='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#flush-collapseTwo'
							aria-expanded='false'
							aria-controls='flush-collapseTwo'
						>
							<h1>
								<strong>YOUR NAME</strong> – 
								<i>ROLE</i>
							</h1>
						</button>
					</h2>
					<div
						id='flush-collapseTwo'
						class='accordion-collapse collapse'
						aria-labelledby='flush-headingTwo'
						data-bs-parent='#accordionProfile'
					>
						{/* upload your pic to the img folder
					import it as in line 3
					change the namee below */}
						<img src={aleksPic} alt='pic' />
						<div class='accordion-body'>DESCRIPTION</div>
					</div>
				</div>
				{/* PERSON #4 */}
				<div class='accordion-item'>
					<h2 class='accordion-header' id='flush-headingTwo'>
						<button
							class='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#flush-collapseTwo'
							aria-expanded='false'
							aria-controls='flush-collapseTwo'
						>
							<h1>
								<strong>YOUR NAME</strong> – 
								<i>ROLE</i>
							</h1>
						</button>
					</h2>
					<div
						id='flush-collapseTwo'
						class='accordion-collapse collapse'
						aria-labelledby='flush-headingTwo'
						data-bs-parent='#accordionProfile'
					>
						{/* upload your pic to the img folder
					import it as in line 3
					change the namee below */}
						<img src={aleksPic} alt='pic' />
						<div class='accordion-body'>DESCRIPTION</div>
					</div>
				</div>
				{/* PERSON #5 */}
				<div class='accordion-item'>
					<h2 class='accordion-header' id='flush-headingTwo'>
						<button
							class='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#flush-collapseTwo'
							aria-expanded='false'
							aria-controls='flush-collapseTwo'
						>
							<h1>
								<strong>YOUR NAME</strong> – 
								<i>ROLE</i>
							</h1>
						</button>
					</h2>
					<div
						id='flush-collapseTwo'
						class='accordion-collapse collapse'
						aria-labelledby='flush-headingTwo'
						data-bs-parent='#accordionProfile'
					>
						{/* upload your pic to the img folder
					import it as in line 3
					change the namee below */}
						<img src={aleksPic} alt='pic' />
						<div class='accordion-body'>DESCRIPTION</div>
					</div>
				</div>
				{/* PERSON #6 */}
				<div class='accordion-item'>
					<h2 class='accordion-header' id='flush-headingTwo'>
						<button
							class='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#flush-collapseTwo'
							aria-expanded='false'
							aria-controls='flush-collapseTwo'
						>
							<h1>
								<strong>YOUR NAME</strong> – 
								<i>ROLE</i>
							</h1>
						</button>
					</h2>
					<div
						id='flush-collapseTwo'
						class='accordion-collapse collapse'
						aria-labelledby='flush-headingTwo'
						data-bs-parent='#accordionProfile'
					>
						{/* upload your pic to the img folder
					import it as in line 3
					change the namee below */}
						<img src={aleksPic} alt='pic' />
						<div class='accordion-body'>DESCRIPTION</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default About;
