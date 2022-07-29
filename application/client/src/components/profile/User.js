import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { getToken } from '../../js/useToken';
import noProfile from '../../img/noProfile.png';

import test from '../../img/sfsu.jpeg';

import { useNavigate } from 'react-router-dom';
import http from '../../http-common';
import noImage from '../../img/noImage.jpeg';
import Spinner from '../misc/Spinner';
import moment from 'moment';
import { ReactSession } from 'react-client-session';
import { alert } from '../../js/alert';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
	// redirect if not logged in
	if (!getToken()) {
		return <Navigate to='/login' />;
	}

	const { id } = useParams();
	let userId = id | null;

	const [isLoaded, setIsLoaded] = useState(false);
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();
	const currentUserId = ReactSession.get('currentUserId');
	console.log(userId + ' = ' + currentUserId);

	if (userId === currentUserId) {
		window.location = '/profile';
	}

	const [userData, setUserData] = useState([]);
	const [edit, setEdit] = useState(false);

	useEffect(() => {
		http('login/id/' + userId)
			.then((res) => {
				setUserData(res.data);
				setPosts(p);
				setIsLoaded(true);
			})
			.catch((e) => {
				setIsLoaded(false);
				console.log(e);
				alert('danger', "user doesn't exist");
				window.location = '/';
			});
	}, []);

	// useEffect(() => {
	// 	http('/AllPosts')
	// 		.then((res) => {
	// 			setIsLoaded(false);

	let p = [];
	// res.data.map((post, i) => {
	// 	if (post.id === userId) {
	// 		p[p.length] = res.data[i];
	// 	}
	// });
	// setPosts(p);
	// setIsLoaded(true);
	// 		})
	// 		.catch((e) => {
	// 			setIsLoaded(false);
	// 			console.log(e);
	// 		});
	// }, []);

	let eMail = '';
	let role = 'Student';
	let firstname = 'Anonymous';
	let lastname = 'User';

	if (isLoaded) {
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
		if (userData.roles && userData.roles.length > 0) {
			role =
				userData.roles[0].role_name === 'ROLE_Student'
					? 'Student'
					: userData.roles[0].role_name === 'ROLE_Professor'
					? 'Professor'
					: userData.roles[0].role_name === 'ROLE_Tutor'
					? 'Tutor'
					: 'Guest';
		}
	}

	const messageUser = (e) => {
		e.stopPropagation();
		e.preventDefault();
		window.location = '/messages';
	};

	return (
		<>
			{!isLoaded && <Spinner />}
			{isLoaded && (
				<div className='profile'>
					<div className='flex-container'>
						<div className='flex-left'>
							<img
								src={noProfile}
								className='profile-pic'
								alt='No image...'
							/>

							<h1>{role}</h1>
							<p>Email: {eMail}</p>
							<div id='profile-btn-1'>
								<button
									htmlFor='edit-user-form-1'
									id='profile-btn-2'
									type='submit'
									className='edit-btn'
									value={edit}
									onClick={(e) => messageUser(e)}
								>
									Message User
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
									{!isLoaded && <Spinner />}
									{isLoaded && (
										<div>
											<div
												style={{ marginBottom: '1rem' }}
											>
												<h3>CREATED POSTS</h3>
												<div className='row row-cols-1 row-cols-md-2 g-4'>
													{posts.map((post, i) => {
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
																		src={
																			post.image
																				? post.image
																				: noImage
																		}
																		className='card-img-top'
																		alt='No image...'
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
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default User;
