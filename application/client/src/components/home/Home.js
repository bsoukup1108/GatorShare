import React, { useEffect, useState } from 'react';
import Sfsu from '../../img/sfsu1.png';
import { useNavigate } from 'react-router-dom';
import http from '../../http-common';
import noImage from '../../img/noImage.jpeg';
import Spinner from '../misc/Spinner';
import moment from 'moment';
import test from '../../img/sfsu.jpeg';
import test1 from '../../img/sfsu1.png';
import { ReactSession } from 'react-client-session';

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

	const setCategory = (e) => {
		ReactSession.set('category', e.target.name);
	};

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
								<h4>
									For{' '}
									<span className='text-warning'>SFSU</span>{' '}
									students, by{' '}
									<span className='text-warning'>SFSU</span>{' '}
									students
									<br />
									<br />
									Here at GatorShare, you can experience a new
									way to share content, receive feedback, and
									connect with SFSU students and faculty.
								</h4>
								<br />

								{!ReactSession.get('token') && (
									<div id='auth-hook'>
										<h4>Get started today!</h4>
										<div>
											<button
												type='button'
												className='signup-btn'
											>
												<a
													className='nav-link'
													href='/login'
												>
													Log In
												</a>
											</button>
										</div>
										<h4 className='home-or'>or</h4>
										<div>
											<button
												type='button'
												className='signup-btn'
											>
												<a
													className='nav-link'
													href='/signup'
												>
													Sign Up
												</a>
											</button>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className='container-home'>
						<div className='container-home-links'>
							<div className='btn-group ' role='group'>
								<button type='button' className='btn btn-dark'>
									<a
										className='nav-link'
										href='/search'
										name='articles&essay'
										onClick={(e) => setCategory(e)}
									>
										Articles & Essays
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a
										className='nav-link'
										href='/search'
										name='art&films'
										onClick={(e) => setCategory(e)}
									>
										Art & Film
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a
										className='nav-link'
										href='/search'
										name='clubs'
										onClick={(e) => setCategory(e)}
									>
										Clubs
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a
										className='nav-link'
										href='/search'
										name='discords'
										onClick={(e) => setCategory(e)}
									>
										Discords
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a
										className='nav-link'
										href='/search'
										name='tutoring'
										onClick={(e) => setCategory(e)}
									>
										Tutoring
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a
										className='nav-link'
										href='/search'
										name='other'
										onClick={(e) => setCategory(e)}
									>
										Other
									</a>
								</button>
							</div>
						</div>
						<div id='carroussel-caps'>
							<h2 className='text-muted'>Most Recent Posts</h2>
							<h2 className='text-muted'>Most Popular Posts</h2>
						</div>
						<div id='main-carroussel'>
							<div
								id='carousel-2'
								className='carousel carousel-dark slide'
								data-bs-ride='carousel'
								onClick={() => navigate(`/posts`)}
							>
								{' '}
								<div className='carousel-inner'>
									{posts.map((post, i) => {
										return (
											<div
												key={`car-1-${i}`}
												className={
													i === 1
														? 'carousel-item active'
														: 'carousel-item'
												}
												data-bs-interval='10000'
											>
												<img
													src={test}
													className='d-block w-100'
													alt='...'
												/>
												<div className='carousel-caption d-none d-md-block'>
													<h5>
														<strong>
															{post.title
																? post.title
																: 'No title ...'}
														</strong>
													</h5>
													<p>
														<small>
															Created by:{' '}
														</small>
														<i>
															{post.user
																? post.user
																		.firstName
																: 'Anonimous'}{' '}
															{post.user
																? post.user
																		.lastName
																: '...'}
														</i>
													</p>
												</div>
											</div>
										);
									})}
								</div>
								<button
									className='carousel-control-prev'
									type='button'
									data-bs-target='#carousel-2'
									data-bs-slide='prev'
									onClick={(e) => e.stopPropagation()}
								>
									<span
										className='carousel-control-prev-icon'
										aria-hidden='true'
									></span>
									<span className='visually-hidden'>
										Previous
									</span>
								</button>
								<button
									className='carousel-control-next'
									type='button'
									data-bs-target='#carousel-2'
									data-bs-slide='next'
									onClick={(e) => e.stopPropagation()}
								>
									<span
										className='carousel-control-next-icon'
										aria-hidden='true'
									></span>
									<span className='visually-hidden'>
										Next
									</span>
								</button>
							</div>
							<div
								id='carousel-1'
								className='carousel carousel-dark slide'
								data-bs-ride='carousel'
								onClick={() => navigate(`/posts`)}
							>
								{' '}
								<div className='carousel-inner'>
									{posts.map((post, i) => {
										return (
											<div
												key={`car-1-${i}`}
												className={
													i === 1
														? 'carousel-item active'
														: 'carousel-item'
												}
												data-bs-interval='10000'
											>
												<img
													src={test1}
													className='d-block w-100'
													alt='...'
												/>
												<div className='carousel-caption d-none d-md-block'>
													<h5>
														<strong>
															{post.title
																? post.title
																: 'No title ...'}
														</strong>
													</h5>
													<p>
														<small>
															Created by:{' '}
														</small>
														<i>
															{post.user
																? post.user
																		.firstName
																: 'Anonimous'}{' '}
															{post.user
																? post.user
																		.lastName
																: '...'}
														</i>
													</p>
												</div>
											</div>
										);
									})}
								</div>
								<button
									className='carousel-control-prev'
									type='button'
									data-bs-target='#carousel-1'
									data-bs-slide='prev'
									onClick={(e) => e.stopPropagation()}
								>
									<span
										className='carousel-control-prev-icon'
										aria-hidden='true'
									></span>
									<span className='visually-hidden'>
										Previous
									</span>
								</button>
								<button
									className='carousel-control-next'
									type='button'
									data-bs-target='#carousel-1'
									data-bs-slide='next'
									onClick={(e) => e.stopPropagation()}
								>
									<span
										className='carousel-control-next-icon'
										aria-hidden='true'
									></span>
									<span className='visually-hidden'>
										Next
									</span>
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
