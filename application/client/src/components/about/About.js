import React, { Fragment } from 'react';


import aleksPic from '../../img/alex.jpg';
import briannasPic from '../../img/brianna.jpg';

import Estefanos from '../../img/Estefanos.jpg'

const About = () => {
	return (
		<Fragment>
			<h1>CSC 648 Software Engineering<br></br>SFSU<br></br>Summer 2022<br></br>Section 01<br></br>Team 01</h1>
			<h2>About the Team</h2>

			<div class='accordion accordion-flush' id='accordionProfile'>
				{/* PERSON #1  Team Leader*/}
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
							<strong>NAME</strong> – 
							<i>ROLE</i>
						</h1>
					</button>

					<div
						id='flush-collapseOne'
						class='accordion-collapse collapse'
						aria-labelledby='flush-headingOne'
						data-bs-parent='#accordionProfile'
					>
						{/* upload your pic to the img folder
					import it as in line 3
					change the namee below */}
						<img src={aleksPic} alt='pic' />

						<div class='accordion-body'></div>
					</div>
				</div>
				{/* PERSON #2 Backend Lead */}
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
								<strong>Estefanos Kebebew</strong> – 
								<i>Backend Lead</i>
							</h1>
						</button>
					</h2>
					<div
						id='flush-collapseTwo'
						class='accordion-collapse collapse'
						aria-labelledby='flush-headingTwo'
						data-bs-parent='#accordionProfile'
					>
					
						<img src={Estefanos} alt='pic' />
						<div class='accordion-body'>My name is esteafnos and i am third year student.</div>
					</div>
				</div>
				{/* PERSON #3 Frontend Lead*/}
				<div class='accordion-item'>
					<h2 class='accordion-header' id='flush-headingThree'>
						<button
							class='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#flush-collapseThree'
							aria-expanded='false'
							aria-controls='flush-collapseThree'
						>
							<h1>
								<strong>Brianna Soukup</strong> – 
								<i>Frontend Lead</i>
							</h1>
						</button>
					</h2>
					<div
						id='flush-collapseThree'
						class='accordion-collapse collapse'
						aria-labelledby='flush-headingThree'
						data-bs-parent='#accordionProfile'
					>
						{/* upload your pic to the img folder
					import it as in line 3
					change the namee below */}
						<img src={briannasPic} alt='pic' />
						<div class='accordion-body'>Hello, I'm a fourth-year computer science student at SFSU with a focus on front-end development. 
						I am originally from Calgary, Alberta, but moved to Daly City, California for college. I consider myself to be a person that is
						 honest, determined, and motivated, as well as someone who learns from their mistakes. I am a creative, open-minded, and laid-back person. 
						 I enjoy taking on new tasks and feel that by working in a team, we can accomplish more. I learned Java, Javascript, HTML, CSS, React, and 
						 other programming languages during my studies. When I'm not focusing on school, I like to be around friends and family. I also love video games,
						  horror films, and car shows.</div>
					</div>
				</div>
				{/* PERSON #4 Database master*/}
				<div class='accordion-item'>
					<h2 class='accordion-header' id='flush-headingFour'>
						<button
							class='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#flush-collapseFour'
							aria-expanded='false'
							aria-controls='flush-collapseFour'
						>
							<h1>
								<strong>YOUR NAME</strong> – 
								<i>ROLE</i>
							</h1>
						</button>
					</h2>
					<div
						id='flush-collapseFour'
						class='accordion-collapse collapse'
						aria-labelledby='flush-headingFour'
						data-bs-parent='#accordionProfile'
					>
						{/* upload your pic to the img folder
					import it as in line 3
					change the namee below */}
						<img src={aleksPic} alt='pic' />
						<div class='accordion-body'>DESCRIPTION</div>
					</div>
				</div>
				{/* PERSON #5 github master */}
				<div class='accordion-item'>
					<h2 class='accordion-header' id='flush-headingFive'>
						<button
							class='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#flush-collapseFive'
							aria-expanded='false'
							aria-controls='flush-collapseFive'
						>
							<h1>
								<strong>YOUR NAME</strong> – 
								<i>ROLE</i>
							</h1>
						</button>
					</h2>
					<div
						id='flush-collapseFive'
						class='accordion-collapse collapse'
						aria-labelledby='flush-headingFive'
						data-bs-parent='#accordionProfile'
					>
						{/* upload your pic to the img folder
					import it as in line 3
					change the namee below */}
						<img src={aleksPic} alt='pic' />
						<div class='accordion-body'>DESCRIPTION</div>
					</div>
				</div>
				{/* PERSON #6 Frontend*/}
				<div class='accordion-item'>
					<h2 class='accordion-header' id='flush-headingSix'>
						<button
							class='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#flush-collapseSix'
							aria-expanded='false'
							aria-controls='flush-collapseSix'
						>
							<h1>
							<strong>Aleksandr</strong> – 
							<i>Frontend developer</i>
							</h1>
						</button>
					</h2>
					<div
						id='flush-collapseSix'
						class='accordion-collapse collapse'
						aria-labelledby='flush-headingSix'
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