import React, { useState } from 'react';
import { useEffect } from 'react';
import aleksPic from '../../img/alex.jpg';
import briannasPic from '../../img/brianna.jpg';
import Estefanos from '../../img/Estefanos.jpg';
import donna from '../../img/donna.jpg';
import MohamedPic from '../../img/Mohamed.jpg';
import BrianPic from '../../img/Brian.JPG';
import noImage from '../../img/noImage.jpeg';
import http from '../../http-common';
import Spinner from '../misc/Spinner';

const About = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		http(`/aboutus`)
			.then((res) => {
				setUsers(res.data);
				setIsLoaded(true);
			})
			.catch((e) => {
				setIsLoaded(false);
				console.log(e);
			});
	}, []);

	const getPic = (name) => {
		switch (name) {
			case 'Donna':
				return donna;

			case 'Brianna':
				return briannasPic;

			case 'Aleksandr':
				return aleksPic;

			case 'Estefanos':
			case 'Estefanos\t\t':
				return Estefanos;

			case 'Mohamed':
				return MohamedPic;

			case 'Brian':
				return BrianPic;

			default:
				return noImage;
		}
	};

	const getRole = (name) => {
		switch (name) {
			case 'Donna':
				return 'Team Lead';

			case 'Brianna':
				return 'Frontend Lead';

			case 'Aleksandr':
				return 'Frontend';

			case 'Estefanos':
			case 'Estefanos\t\t':
				return 'Backend Lead';

			case 'Mohamed':
				return 'Github Master';

			case 'Brian':
				return 'Database Master';

			default:
				return 'incognito';
		}
	};

	return (
		<>
			{!isLoaded && <Spinner />}
			{isLoaded && (
				<div className='container'>
					<h1>
						CSC 648 Software Engineering
						<br />
						SFSU
						<br />
						Summer 2022
						<br></br>Section 01<br></br>Team 01
					</h1>
					<h2>About the Team</h2>

					<div style={{ marginBottom: '1rem' }}>
						{users.map((user, i) => {
							return (
								<div key={`about-${i}`} className='card mb-3'>
									<div className='row g-0'>
										<div className='col-md-4'>
											<img
												src={getPic(user.firstName)}
												className='img-fluid rounded-start'
												alt='...'
												style={{ width: '100%' }}
											/>
										</div>
										<div className='col-md-8'>
											<div className='card-body'>
												<h5 className='card-title'>
													{user.firstName}{' '}
													{user.lastName}
												</h5>
												<p className='card-text'>
													{user.information}
												</p>
												<p className='card-text'>
													<small className='text-muted'>
														{getRole(
															user.firstName
														)}
													</small>
												</p>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default About;
