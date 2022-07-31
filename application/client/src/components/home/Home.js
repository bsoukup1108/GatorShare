import React, { useEffect, useState } from 'react';
import Sfsu from '../../img/sfsu1.png';
import { useNavigate } from 'react-router-dom';
import http from '../../http-common';
import noImage from '../../img/noImage.jpeg';
import Spinner from '../misc/Spinner';
import { ReactSession } from 'react-client-session';

const Home = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [post1, setPost1] = useState([]);
	const [post2, setPost2] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		setPost1([]);
		setPost2([]);
		// http(`/search/{ASC}`)
		// 	.then((res) => {
		// 		setPost1(res.data);
		// 		setIsLoaded(false);
		// 	})
		// 	.then(
		// 		http(`/search/{Like}`)
		// 			.then((res) => {
		// 				setPost2(res.data);
		// 				setIsLoaded(true);
		// 			})
		// 			.catch((e) => {
		// 				setIsLoaded(false);
		// 				console.log(e);
		// 			})
		// 	)
		// 	.catch((e) => {
		// 		setIsLoaded(false);
		// 		console.log(e);
		// 	});
	}, []);

	const setCategory = (e) => {
		ReactSession.set('category', e.target.name);
	};

	return (
		<>
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
								For <span className='text-warning'>SFSU</span>{' '}
								students, by{' '}
								<span className='text-warning'>SFSU</span>{' '}
								students
								<br />
								<br />
								Here at GatorShare, you can experience a new way
								to share content, receive feedback, and connect
								with SFSU students and faculty.
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
				{!isLoaded && <Spinner />}
				{isLoaded && (
					<div className='container-home'>
						<div className='container-home-links'>
							<div className='btn-group ' role='group'>
								<button type='button' className='btn btn-dark'>
									<a
										className='nav-link'
										href='/search'
										name='Articles&Essays'
										onClick={(e) => setCategory(e)}
									>
										Articles & Essays
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a
										className='nav-link'
										href='/search'
										name='Art&Films'
										onClick={(e) => setCategory(e)}
									>
										Art & Film
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a
										className='nav-link'
										href='/search'
										name='Clubs'
										onClick={(e) => setCategory(e)}
									>
										Clubs
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a
										className='nav-link'
										href='/search'
										name='Discords'
										onClick={(e) => setCategory(e)}
									>
										Discords
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a
										className='nav-link'
										href='/search'
										name='Tutoring'
										onClick={(e) => setCategory(e)}
									>
										Tutoring
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a
										className='nav-link'
										href='/search'
										name='Other'
										onClick={(e) => setCategory(e)}
									>
										Other
									</a>
								</button>
							</div>
						</div>
						<div id='main-carroussel'>
							<div className='carroussel-caps'>
								<h2 className='text-muted'>
									Most Recent Posts
								</h2>

								<div
									id='carousel-2'
									className='carousel carousel-dark'
									data-bs-ride='carousel'
									onClick={() => {
										ReactSession.set('searchRes', 'recent');
										navigate(`/search`);
									}}
								>
									<div className='carousel-inner'>
										{post1.map((post, i) => {
											let srcImg = noImage;
											if (post.data) {
												let src =
													'data:image/png;base64,';
												src += post.data;
												if (
													src.length > 30 &&
													post.name !== 'fake'
												) {
													srcImg = src;
												}
											}
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
														src={srcImg}
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
							</div>
							<div className='carroussel-caps'>
								<h2 className='text-muted'>
									Most Popular Posts
								</h2>
								<div className='carussel-flex-1'>
									<div
										id='carousel-1'
										className='carousel carousel-dark '
										data-bs-ride='carousel'
										onClick={() => {
											ReactSession.set(
												'searchRes',
												'popular'
											);
											navigate(`/search`);
										}}
									>
										<div className='carousel-inner'>
											{post2.map((post, i) => {
												let srcImg = noImage;
												if (post.data) {
													let src =
														'data:image/png;base64,';
													src += post.data;
													if (
														src.length > 30 &&
														post.name !== 'fake'
													) {
														srcImg = src;
													}
												}
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
															src={srcImg}
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
																		? post
																				.user
																				.firstName
																		: 'Anonimous'}{' '}
																	{post.user
																		? post
																				.user
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
						</div>
					</div>
				)}
			</>
		</>
	);
};

export default Home;
