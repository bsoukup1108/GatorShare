import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../../http-common';
import noImage from '../../img/noImage.jpeg';
import Spinner from '../misc/Spinner';
import moment from 'moment';
import test from '../../img/sfsu.jpeg';
import { ReactSession } from 'react-client-session';
import { useEffect } from 'react';

const Posts = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		http(`/AllPosts`)
			.then((res) => {
				setPosts(res.data);
				setIsLoaded(true);
			})
			.catch((e) => {
				setIsLoaded(false);
			});
	}, []);

	const filterByName = () => {
		let datafil = posts;
		let val = datafil.sort(function (a, b) {
			let dateA = a.title[0].toLowerCase();
			let dateB = b.title[0].toLowerCase();

			if (dateA < dateB) {
				return -1;
			} else if (dateA > dateB) {
				return 1;
			}
			return 0;
		});
		return val;
	};
	const filterByDate = () => {
		let datafil = posts;
		let val = datafil.sort(function (a, b) {
			let dateA = a.createdDate;
			let dateB = b.createdDate;

			if (dateA < dateB) {
				return -1;
			} else if (dateA > dateB) {
				return 1;
			}
			return 0;
		});
		return val;
	};

	const filterByLike = () => {
		let datafil = posts;
		let val = datafil.sort(function (a, b) {
			let dateA = a.id;
			let dateB = b.id;

			if (dateA < dateB) {
				return -1;
			} else if (dateA > dateB) {
				return 1;
			}
			return 0;
		});
		return val;
	};

	const saveIdToLoacalStorage = (postId) => {
		ReactSession.set('postId', postId);
	};

	return (
		<>
			{!isLoaded && <Spinner />}
			{isLoaded && (
				<div>
					<h1>All Posts</h1>
					<div id='sort'>
						<div className='dropdown'>
							<button
								className='btn btn-secondary dropdown-toggle sort-btn'
								type='button'
								id='dropdownMenuButton1'
								data-bs-toggle='dropdown'
								aria-expanded='false'
							>
								Sort by
							</button>
							<ul
								className='dropdown-menu'
								aria-labelledby='dropdownMenuButton1'
							>
								<li>
									<a
										className='dropdown-item'
										href='#'
										onClick={() => setPosts(filterByName())}
									>
										Alphabetically
									</a>
								</li>
								<li>
									<a
										className='dropdown-item'
										href='#'
										onClick={() => setPosts(filterByLike())}
									>
										Most recent
									</a>
								</li>
								<li>
									<a
										className='dropdown-item'
										href='#'
										onClick={() => setPosts(filterByName())}
									>
										Most popular
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
						<div className='row row-cols-1 row-cols-md-3 g-4'>
							{posts.map((post, i) => {
								return (
									<div
										key={`posts-post-${i}`}
										className='col'
										onClick={saveIdToLoacalStorage(post.id)}
									>
										<div
											className='card posts'
											onClick={() => {
												navigate(`/posts/${post.id}`);
												return false;
											}}
										>
											<img
												src={test}
												className='card-img-top'
												alt='No image...'
											/>
											<div className='card-body'>
												<h5 className='card-title'>
													<i>
														{post.title
															? post.title
															: 'No title...'}
													</i>
												</h5>
												<p
													className='card-text'
													style={{
														whiteSpace: 'nowrap',
														overflow: 'hidden',
														textOverflow:
															'ellipsis',
														maxWidth: '500px',
													}}
												>
													{post.content
														? post.content
														: 'No description...'}
												</p>
												<p className='card-text'>
													<small className='text-muted'>
														Created
														<i>
															{' '}
															{post.createdDate
																? moment(
																		post.createdDate
																  )
																		.startOf(
																			'day'
																		)
																		.fromNow()
																: ''}{' '}
														</i>
														by{' '}
														<strong>
															{post.user
																? post.user
																		.firstName
																: 'Anonymous'}{' '}
															{post.user
																? post.user
																		.lastName
																: 'User'}
														</strong>
													</small>
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Posts;
