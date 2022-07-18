import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { getToken } from '../../js/useToken';
import noProfile from '../../img/noProfile.png';

import { useNavigate } from 'react-router-dom';
import http from '../../http-common';
import noImage from '../../img/noImage.jpeg';
import Spinner from '../misc/Spinner';
import moment from 'moment';

const Profile = () => {
	// redirect if not logged in
	if (!getToken()) {
		return <Navigate to='/login' />;
	}

	const [isLoaded, setIsLoaded] = useState(false);
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		http('/posts')
			.then((res) => {
				setPosts([
					{
						id: 1,
						user: {
							id: 1,
							firstName: 'rrr',
							lastName: 'test123',
							password: '16D7A4FCA7442DDA3AD93C9A726597E4',
							email: 'test',
						},
						createdDate: '2022-07-17T02:36:13.000+00:00',
						content: 'Test',
						title: 'Test',
					},
					{
						id: 1,
						user: {
							id: 1,
							firstName: 'rrr',
							lastName: 'test123',
							password: '16D7A4FCA7442DDA3AD93C9A726597E4',
							email: 'test',
						},
						createdDate: '2022-07-17T02:36:13.000+00:00',
						content: 'Test',
						title: 'Test',
					},
					{
						id: 1,
						user: {
							id: 1,
							firstName: 'rrr',
							lastName: 'test123',
							password: '16D7A4FCA7442DDA3AD93C9A726597E4',
							email: 'test',
						},
						createdDate: '2022-07-17T02:36:13.000+00:00',
						content: 'Test',
						title: 'Test',
					},
					{
						id: 1,
						user: {
							id: 1,
							firstName: 'rrr',
							lastName: 'test123',
							password: '16D7A4FCA7442DDA3AD93C9A726597E4',
							email: 'test',
						},
						createdDate: '2022-07-17T02:36:13.000+00:00',
						content: 'Test',
						title: 'Test',
					},
					{
						id: 1,
						user: {
							id: 1,
							firstName: 'rrr',
							lastName: 'test123',
							password: '16D7A4FCA7442DDA3AD93C9A726597E4',
							email: 'test',
						},
						createdDate: '2022-07-17T02:36:13.000+00:00',
						content: 'Test',
						title: 'Test',
					},
					{
						id: 1,
						user: {
							id: 1,
							firstName: 'rrr',
							lastName: 'test123',
							password: '16D7A4FCA7442DDA3AD93C9A726597E4',
							email: 'test',
						},
						createdDate: '2022-07-17T02:36:13.000+00:00',
						content: 'Test',
						title: 'Test',
					},
					{
						id: 1,
						user: {
							id: 1,
							firstName: 'rrr',
							lastName: 'test123',
							password: '16D7A4FCA7442DDA3AD93C9A726597E4',
							email: 'test',
						},
						createdDate: '2022-07-17T02:36:13.000+00:00',
						content: 'Test',
						title: 'Test',
					},
					{
						id: 1,
						user: {
							id: 1,
							firstName: 'rrr',
							lastName: 'test123',
							password: '16D7A4FCA7442DDA3AD93C9A726597E4',
							email: 'test',
						},
						createdDate: '2022-07-17T02:36:13.000+00:00',
						content: 'Test',
						title: 'Test',
					},
					{
						id: 1,
						user: {
							id: 1,
							firstName: 'rrr',
							lastName: 'test123',
							password: '16D7A4FCA7442DDA3AD93C9A726597E4',
							email: 'test',
						},
						createdDate: '2022-07-17T02:36:13.000+00:00',
						content: 'Test',
						title: 'Test',
					},
				]);
				setIsLoaded(true);
			})
			.catch((e) => {
				setIsLoaded(false);
				console.log(e);
			});
	}, []);

	const role = 'Student';
	const firstname = 'Joe';
	const lastname = 'Doe';
	const eMail = 'email@email.mx';

	const confirmDeletion = (e) => {
		e.stopPropagation();
		e.preventDefault();
		window.confirm('Do you really want to delete the post?');
	};

	return (
		<>
			<div className='profile'>
				<div className='flex-container'>
					<div className='flex-left'>
						<img
							src={noProfile}
							className='profile-pic'
							alt='No image...'
						/>

						<h1>{role}</h1>
						<p>email: {eMail}</p>
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
										<div style={{ marginBottom: '1rem' }}>
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
																		`/post/${post.id}`
																	);
																	return false;
																}}
															>
																<img
																	src={
																		post.image
																			? noImage
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
																					post
																						.user
																						.firstName
																				}{' '}
																				{
																					post
																						.user
																						.lastName
																				}
																			</strong>
																		</small>
																	</p>
																	<button
																		type='button'
																		className='btn btn-danger'
																		onClick={(
																			e
																		) =>
																			confirmDeletion(
																				e
																			)
																		}
																	>
																		DELETE
																	</button>
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
		</>
	);
};

export default Profile;
