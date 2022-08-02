import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../../js/useToken';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { ReactSession } from 'react-client-session';
import { useEffect } from 'react';
import noProfile from '../../img/noProfile.png';
import http from '../../http-common';
import Spinner from '../misc/Spinner';
import { alert } from '../../js/alert';
import httpFormData from '../../http-form-data';

import art from '../../img/art.jpeg';
import articles from '../../img/articles.jpg';
import club from '../../img/club.jpg';
import other from '../../img/other.png';
import discord from '../../img/discord.png';
import tutor from '../../img/tutor.jpg';

const Profile = () => {
	// redirect if not logged in
	if (!getToken()) {
		return <Navigate to='/login' />;
	}
	const [isLoaded, setIsLoaded] = useState(false);
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();
	const userId = ReactSession.get('currentUserId');

	const [userData, setUserData] = useState([]);
	const [edit, setEdit] = useState(false);
	const [editPost, setEditPost] = useState(false);

	useEffect(() => {
		http('login/id/' + userId)
			.then((res) => {
				setUserData(res.data);

				setIsLoaded(true);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	let title = '';
	let descrption = '';

	useEffect(() => {
		http('/posts')
			.then((res) => {
				setIsLoaded(false);

				let p = [];
				res.data.map((post, i) => {
					if (post) {
						if (post.user_ID === userId) {
							p[p.length] = res.data[i];
						}
					}
					return p;
				});
				if (p !== []) {
					setPosts(p);
				}
				setIsLoaded(true);
			})
			.then((res) => {
				setIsLoaded(false);
			})
			.catch((e) => {
				setIsLoaded(false);
				console.log(e);
			});
	}, []);

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

	const [formData, setFormData] = useState();
	const [formDataPost, setFormDataPost] = useState({
		id: 0,
		postTitle: title,
		Descrption: descrption,
	});

	const { postTitle, Descrption } = formDataPost;

	const confirmPostEdit = (e) => {
		e.stopPropagation();
		e.preventDefault();
		if (editPost) {
			setEditPost(false);
			document.getElementById('edit-post-form-1').hidden = true;
		} else {
			setEditPost(true);
			document.getElementById('edit-post-form-1').hidden = false;
		}
	};

	const confirmUserEdit = (e) => {
		e.stopPropagation();
		e.preventDefault();
		if (edit) {
			setEdit(false);
			document.getElementById('profile-btn-2').innerHTML = 'Edit Profile';
			document
				.getElementById('profile-btn-2')
				.classList.remove('btn-success');
			document
				.getElementById('profile-btn-2')
				.classList.toggle('btn-warning');
		} else {
			setEdit(true);
			document
				.getElementById('profile-btn-2')
				.classList.toggle('btn-warning');

			document
				.getElementById('profile-btn-2')
				.classList.add('btn-success');
			document.getElementById('profile-btn-2').innerHTML = 'Hide Edit';
		}
	};

	const confirmPostDeletion = (e) => {
		e.stopPropagation();
		e.preventDefault();

		if (window.confirm('Do you really want to delete the post?')) {
			http.delete(`/post/delete/${e.target.value}`)
				.then((res) => {
					alert('warning', 'POST HAS BEEN DELETED...');
					return window.location.reload();
				})
				.catch((e) => {
					console.log(e);
				});
		}
	};

	const confirmUserDeletion = (e) => {
		e.stopPropagation();
		e.preventDefault();

		if (window.confirm('Do you really want to delete the post?')) {
			http.delete(`/User/delete/${e.target.value}`)
				.then((res) => {
					alert('warning', 'USER HAS BEEN DELETED...');
					localStorage.clear();
					return (window.location = '/login');
				})
				.catch((e) => {
					console.log(e);
				});
		}
	};

	const onChangePost = (e) => {
		setFormDataPost({
			...formDataPost,
			[e.target.name]: e.target.value,
		});
	};

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onSaveUser = (e) => {
		alert('danger', 'cannot update profile...');
		e.stopPropagation();
		e.preventDefault();
		return window.location.reload();
	};

	const onSavePost = (e) => {
		e.preventDefault();
		e.stopPropagation();

		let postId = document.getElementById('edit-btn-5').value;
		const { postTitle, Descrption } = formDataPost;

		let newPostname = postTitle;
		let newDescription = Descrption;

		document.getElementById('edit-post-form-1').hidden = true;

		httpFormData
			.post('/changePostTitle', { id: postId, newPostname: newPostname })
			.then()
			.then((res) => {})
			.catch((e) => {
				console.log(e);
			});

		httpFormData
			.post('/changePostDescription', {
				id: postId,
				newDescription: newDescription,
			})
			.then((res) => {})
			.catch((e) => {
				console.log(e);
			});

		return window.location.reload();

		alert('success', 'post changed');
	};

	return (
		<>
			{!isLoaded && <Spinner />}
			{isLoaded && (
				<div className='profile'>
					<div className='flex-container profile-page-1'>
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
									htmlFor='edit-user-form-1'
									id='profile-btn-2'
									type='submit'
									className='edit-btn'
									value={edit}
									onClick={(e) => confirmUserEdit(e)}
									onSubmit={(e) => {
										onSaveUser(e);
									}}
								>
									Edit Profile
								</button>
								<button
									type='button'
									className='delete-btn'
									value={userId}
									onClick={(e) => confirmUserDeletion(e)}
								>
									DELETE
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
												style={{
													marginBottom: '1rem',
												}}
											>
												{edit && isLoaded && (
													<div id='edit-user-form-1'>
														<form className='form'>
															<h1>
																<b>
																	Edit Profile
																</b>
															</h1>

															<div className='form-group'>
																<label
																	className='form-label'
																	htmlFor='email'
																>
																	email
																</label>
																<input
																	className='form-control'
																	type='text'
																	name='emailForm'
																	defaultValue={
																		eMail
																	}
																	onChange={(
																		e
																	) =>
																		onChange(
																			e
																		)
																	}
																/>
															</div>
															<div className='form-group'>
																<label
																	className='form-label'
																	htmlFor='firstname'
																>
																	Firstname
																</label>
																<input
																	className='form-control'
																	type='text'
																	name='firstname'
																	defaultValue={
																		firstname
																	}
																	onChange={(
																		e
																	) =>
																		onChange(
																			e
																		)
																	}
																/>
															</div>
															<div className='form-group'>
																<label
																	className='form-label'
																	htmlFor='lastname'
																>
																	lastname
																</label>
																<input
																	className='form-control'
																	type='text'
																	name='lastname'
																	defaultValue={
																		lastname
																	}
																	onChange={(
																		e
																	) =>
																		onChange(
																			e
																		)
																	}
																/>
																<button
																	htmlFor='edit-user-form-1'
																	id='profile-btn-2'
																	type='submit'
																	className='edit-btn'
																	value={edit}
																	onClick={(
																		e
																	) =>
																		onSaveUser(
																			e
																		)
																	}
																	onSubmit={(
																		e
																	) => {
																		onSaveUser(
																			e
																		);
																	}}
																>
																	Save Profile
																</button>
															</div>
														</form>
													</div>
												)}

												<div
													id='edit-post-form-1'
													hidden
												>
													<form className='form form-save-post'>
														<h1>
															<b>Edit Post</b>
														</h1>

														<div className='form-group'>
															<label
																className='form-label'
																htmlFor='postTitle'
															>
																Add title
															</label>
															<input
																className='form-control'
																id='post-change-1'
																type='text'
																placeholder='Title'
																name='postTitle'
																value={
																	postTitle
																}
																onChange={(e) =>
																	onChangePost(
																		e
																	)
																}
															/>
														</div>
														<div
															className=''
															id='descInput'
														>
															<label
																className='form-label'
																htmlFor='Descrption'
															>
																Add description
															</label>
															<textarea
																className='form-control'
																placeholder='Description'
																name='Descrption'
																value={
																	Descrption
																}
																onChange={(e) =>
																	onChangePost(
																		e
																	)
																}
															></textarea>
														</div>
														<button
															id='save-btn-post'
															className='createpost-btn'
															type='submit'
															value='Post'
															onClick={(e) => {
																onSavePost(e);
															}}
														>
															Save
														</button>
													</form>
												</div>

												<h3 className='text-mute'>
													CREATED POSTS
												</h3>
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
															tagg ===
															'Art & Film'
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
																		src={
																			img
																		}
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
																		<button
																			id='edit-btn-5'
																			type='button'
																			className='edit-btn'
																			value={
																				post.id
																			}
																			onClick={(
																				e
																			) =>
																				confirmPostEdit(
																					e,
																					post.id
																				)
																			}
																		>
																			Edit
																		</button>
																		<button
																			type='button'
																			className='delete-btn'
																			value={
																				post.id
																			}
																			onClick={(
																				e
																			) =>
																				confirmPostDeletion(
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
			)}
		</>
	);
};

export default Profile;
