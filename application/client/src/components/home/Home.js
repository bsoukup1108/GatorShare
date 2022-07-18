import React, { useEffect, useState } from 'react';
import Sfsu from '../../img/sfsu.jpeg';
import { useNavigate } from 'react-router-dom';
import http from '../../http-common';
import noImage from '../../img/noImage.jpeg';
import Spinner from '../misc/Spinner';
import moment from 'moment';

const Home = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		http(`/posts`)
			.then((res) => {
				setPosts(res.data);
				setIsLoaded(true);
			})
			.catch((e) => {
				setIsLoaded(false);
				console.log(e);
			});
	}, []);

	return (
		<>
			{!isLoaded && <Spinner />}
			{isLoaded && (
				<>
					<img
						className='kenburns-top homeImg img-fluid'
						alt='...'
						src={Sfsu}
					></img>
					<div className='container1'>
						{' '}
						<div className='gradient-hor bg-pan-right flex-center-1'>
							<div className='content'>
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
					<div className='container-home'>
						<div className='container-home-links'>
							<div className='btn-group ' role='group'>
								<button type='button' className='btn btn-dark'>
									<a className='nav-link' href='#'>
										Articles and Essays
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a className='nav-link' href='#'>
										Art & Film
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a className='nav-link' href='#'>
										Clubs
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a className='nav-link' href='#'>
										Discord
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a className='nav-link' href='#'>
										Tutoring
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a className='nav-link' href='#'>
										Other
									</a>
								</button>
							</div>
						</div>

						<div id='main-carroussel'>
							<div
								id='carousel-2'
								class='carousel carousel-dark slide'
								data-bs-ride='carousel'
							>
								<h2 className='text-muted'>
									Most Popular Posts
								</h2>
								<div class='carousel-inner'>
									<div
										class='carousel-item active'
										data-bs-interval='10000'
									>
										<img
											src={noImage}
											class='d-block w-100'
											alt='...'
										/>
										<div class='carousel-caption d-none d-md-block'>
											<h5>First slide label</h5>
											<p>
												Some representative placeholder
												content for the first slide.
											</p>
										</div>
									</div>
								</div>
								<button
									class='carousel-control-prev'
									type='button'
									data-bs-slide='prev'
								>
									<span
										class='carousel-control-prev-icon'
										aria-hidden='true'
									></span>
									<span class='visually-hidden'>
										Previous
									</span>
								</button>
								<button
									class='carousel-control-next'
									type='button'
									data-bs-slide='next'
								>
									<span
										class='carousel-control-next-icon'
										aria-hidden='true'
									></span>
									<span class='visually-hidden'>Next</span>
								</button>
							</div>
							<div
								id='carousel-1'
								class='carousel carousel-dark slide'
								data-bs-ride='carousel'
							>
								<h2 className='text-muted'>
									Most Recent Posts
								</h2>
								<div class='carousel-inner'>
									<div
										class='carousel-item active'
										data-bs-interval='10000'
									>
										<img
											src={noImage}
											class='d-block w-100'
											alt='...'
										/>
										<div class='carousel-caption d-none d-md-block'>
											<h5>First slide label</h5>
											<p>
												Some representative placeholder
												content for the first slide.
											</p>
										</div>
									</div>
								</div>
								<button
									class='carousel-control-prev'
									type='button'
									data-bs-slide='prev'
								>
									<span
										class='carousel-control-prev-icon'
										aria-hidden='true'
									></span>
									<span class='visually-hidden'>
										Previous
									</span>
								</button>
								<button
									class='carousel-control-next'
									type='button'
									data-bs-slide='next'
								>
									<span
										class='carousel-control-next-icon'
										aria-hidden='true'
									></span>
									<span class='visually-hidden'>Next</span>
								</button>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Home;
