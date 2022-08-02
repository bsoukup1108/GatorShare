import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import moment from 'moment';
import { getToken } from '../../js/useToken';
import noProfile from '../../img/noProfile.png';
import Spinner from '../misc/Spinner';
import http from '../../http-common';
import { alert } from '../../js/alert';

import art from '../../img/art.jpeg';
import articles from '../../img/articles.jpg';
import club from '../../img/club.jpg';
import other from '../../img/other.png';
import discord from '../../img/discord.png';
import tutor from '../../img/tutor.jpg';

const Tutor = () => {
	// redirect if not logged in
	if (!getToken()) {
		return <Navigate to='/login' />;
	}

	const navigate = useNavigate();

	const [isLoaded1, setIsLoaded1] = useState(false);
	const [isLoaded2, setIsLoaded2] = useState(false);
	const [posts, setPosts] = useState([]);
	const [userData, setUserData] = useState([]);
	const [edit, setEdit] = useState(false);

	useEffect(() => {
		http('login/id/5')
			.then((res) => {
				setUserData(res.data);
				setIsLoaded1(true);
			})
			.catch((e) => {
				setIsLoaded1(false);
				console.log(e);
				alert('danger', "user doesn't exist");
				window.location = '/';
			});
	}, []);

	useEffect(() => {
		http('/posts')
			.then((res) => {
				setIsLoaded2(false);
				let p = [];
				if (res.data) {
					res.data.map((post, i) => {
						if (post) {
							if (post.user_ID === 5) {
								p[p.length] = post;
							}
						}
						return p;
					});
				}

				setPosts(p);

				if ((posts !== []) | (p === [])) {
					setIsLoaded2(true);
				}
			})
			.catch((e) => {
				setIsLoaded2(false);
				console.log(e);
			});
	}, []);

	let eMail = '';
	let role = 'Tutor';
	let firstname = 'Anonymous';
	let lastname = 'User';

	if (isLoaded1) {
		if (userData.firstName) {
			firstname = userData.firstName
				? userData.firstName.toUpperCase()
				: 'Anonymous';
		}
		if (userData.lastName) {
			lastname = userData.lastName
				? userData.lastName.toUpperCase()
				: 'User';
		}
		if (userData.email) {
			eMail = userData.email ? userData.email : '';
		}

		const messageUser = (e) => {
			e.stopPropagation();
			e.preventDefault();
			window.location = '/messages';
		};

		return (
			<>
				<div className='profile'>
					<div className='flex-container'>
						<div className='flex-left'>
							<img
								src={noProfile}
								className='profile-pic'
								alt='Error loading...'
							/>

							<h1>{role}</h1>
							<p>Email: {eMail}</p>
							<div id='profile-btn-1'>
								<button
									htmlFor='edit-user-form-2'
									id='profile-btn-2'
									type='submit'
									className='edit-btn'
								>
									<a href={`mailto:${eMail}`}>Send Email</a>
								</button>
								<button
									htmlFor='edit-user-form-1'
									id='profile-btn-2'
									type='submit'
									className='edit-btn'
									value={edit}
									onClick={(e) => messageUser(e)}
								>
									Go To Group Chat
								</button>
							</div>
						</div>
						<div className='flex-right'>
							<div className='flex-container-right'>
								<div className='flex-up'>
									<h1>
										{firstname} {lastname}
									</h1>
								</div>
								<div className='flex-down'>
									<div style={{ marginBottom: '1rem' }}>
										<h3 className='text-mute'>
											CREATED POSTS
										</h3>
										{!isLoaded2 && <Spinner />}
										{isLoaded2 && (
											<div className='row row-cols-1 row-cols-md-2 g-4'>
												{posts.map((post, i) => {
													let img;

													let tagg = post.tag
														? post.tag
														: 'Other';

													if (
														tagg ===
														'Articles & Essays'
													) {
														img = articles;
													} else if (
														tagg === 'Art & Film'
													) {
														img = art;
													} else if (
														tagg === 'Clubs'
													) {
														img = club;
													} else if (
														tagg === 'Discords'
													) {
														img = discord;
													} else if (
														tagg === 'Tutoring'
													) {
														img = tutor;
													} else {
														img = other;
													}
													return (
														<div
															key={`posts-post-${i}`}
															className='col'
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
																<img
																	src={img}
																	className='card-img-top'
																	alt='Error loading...'
																/>
																<div className='card-body'>
																	<h5 className='card-title'>
																		{post.title
																			? post.title
																			: 'No title...'}
																	</h5>
																	<p
																		className='card-text'
																		style={{
																			whiteSpace:
																				'nowrap',
																			overflow:
																				'hidden',
																			textOverflow:
																				'ellipsis',
																			maxWidth:
																				'500px',
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
																				{moment(
																					post.createdDate
																				)
																					.startOf(
																						'day'
																					)
																					.fromNow()}{' '}
																			</i>
																			by{' '}
																			<strong>
																				{
																					firstname
																				}{' '}
																				{
																					lastname
																				}
																			</strong>
																		</small>
																	</p>
																</div>
															</div>
														</div>
													);
												})}
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
};

export default Tutor;
