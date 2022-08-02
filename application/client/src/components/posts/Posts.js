import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { ReactSession } from 'react-client-session';
import { useEffect } from 'react';
import http from '../../http-common';
import Spinner from '../misc/Spinner';

import art from '../../img/art.jpeg';
import articles from '../../img/articles.jpg';
import club from '../../img/club.jpg';
import other from '../../img/other.png';
import discord from '../../img/discord.png';
import tutor from '../../img/tutor.jpg';

const Posts = () => {
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
			});
	}, []);

	let img;

	const filterByName = () => {
		let datafil = posts;
		let val = datafil.sort(function (a, b) {
			if (a.title[0] === undefined || b.title[0] === undefined) {
				return -1;
			}
			let dateA =
				a.title[0] === undefined
					? 'No title...'
					: a.title[0].toLowerCase();
			let dateB =
				b.title[0] === undefined
					? 'No title...'
					: b.title[0].toLowerCase();

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

			if (dateA > dateB) {
				return -1;
			} else if (dateA < dateB) {
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

	if (posts.length > 0) {
		return (
			<>
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
										href='#!'
										onClick={() => setPosts(filterByName())}
									>
										Alphabetically
									</a>
								</li>
								<li>
									<a
										className='dropdown-item'
										href='#!'
										onClick={() => setPosts(filterByDate())}
									>
										Most recent
									</a>
								</li>
								<li>
									<a
										className='dropdown-item'
										href='#!'
										onClick={() => setPosts(filterByLike())}
									>
										Most popular
									</a>
								</li>
							</ul>
						</div>
					</div>

					{!isLoaded && <Spinner />}
					{isLoaded && (
						<div
							style={{ marginBottom: '1rem', marginTop: '1rem' }}
						>
							<div
								id='posts-render'
								className='row row-cols-1 row-cols-md-3 g-4'
							>
								{posts.map((post, i) => {
									let tagg = post.tag ? post.tag : 'Other';

									if (tagg === 'Articles & Essays') {
										img = articles;
									} else if (tagg === 'Art & Film') {
										img = art;
									} else if (tagg === 'Clubs') {
										img = club;
									} else if (tagg === 'Discords') {
										img = discord;
									} else if (tagg === 'Tutoring') {
										img = tutor;
									} else {
										img = other;
									}

									return (
										<div
											key={`posts-post-${i}`}
											className='col'
											onClick={saveIdToLoacalStorage(
												post.id
											)}
										>
											<div
												className='card posts'
												onClick={() => {
													navigate(
														`/posts/${post.id}`
													);
													return false;
												}}
											>
												{' '}
												<div id='post-top-2'>
													<div id='post-tag-2'>
														<p>
															<span className='badge badge-primary'>
																{!!post.tag
																	? post.tag
																	: 'No tag'}
															</span>
														</p>
													</div>
												</div>
												<img
													src={img}
													className='card-img-top'
													alt='Error loading...'
												/>
												<div className='card-body posts-body-1'>
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
															whiteSpace:
																'nowrap',
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
														</small>
													</p>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					)}
				</div>
			</>
		);
	} else {
		return null;
	}
};

export default Posts;
