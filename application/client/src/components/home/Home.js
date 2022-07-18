import React, { useEffect, useState } from 'react';
import Sfsu from '../../img/sfsu1.png';
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
								<h4>
									For <span class='text-warning'>SFSU</span>{' '}
									students, by{' '}
									<span class='text-warning'>SFSU</span>{' '}
									students
								</h4>
							</div>
						</div>
					</div>
					<div className='container-home'>
						<div className='container-home-links'>
							<div className='btn-group ' role='group'>
								<button type='button' className='btn btn-dark'>
									<a className='nav-link' href='/posts'>
										Articles and Essays
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a className='nav-link' href='/posts'>
										Art & Film
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a className='nav-link' href='/posts'>
										Clubs
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a className='nav-link' href='/posts'>
										Discords
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a className='nav-link' href='/posts'>
										Tutoring
									</a>
								</button>
								<button type='button' className='btn btn-dark '>
									<a className='nav-link' href='/posts'>
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
													src={noImage}
													className='d-block w-100'
													alt='...'
												/>
												<div className='carousel-caption d-none d-md-block'>
													<h5>
														{post.title
															? post.title
															: 'No title ...'}
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
										console.log(post.title);
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
													src={noImage}
													className='d-block w-100'
													alt='...'
												/>
												<div className='carousel-caption d-none d-md-block'>
													<h5>
														{post.title
															? post.title
															: 'No title ...'}
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
