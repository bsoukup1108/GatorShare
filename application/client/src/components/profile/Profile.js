import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../../js/useToken';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { ReactSession } from 'react-client-session';
import { useEffect } from 'react';
import noProfile from '../../img/noProfile.png';
import http from '../../http-common';
import noImage from '../../img/noImage.jpeg';
import Spinner from '../misc/Spinner';
import { alert } from '../../js/alert';

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

	useEffect(() => {
		http('login/id/' + userId).then((res) => {
			setUserData(res.data);

			setIsLoaded(true);
		});
	}, []);

	useEffect(() => {
		http('/posts')
			.then((res) => {
				setIsLoaded(false);
				let p = [];
				res.data.map((post, i) => {
					if (post.user) {
						if (post.user.id === userId) {
							p[p.length] = res.data[i];
						}
					}
					return p;
				});
				setPosts(p);
				setIsLoaded(true);
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
			onSubmitForm();
		} else {
			setEdit(true);
			document
				.getElementById('profile-btn-2')
				.classList.toggle('btn-warning');

			document
				.getElementById('profile-btn-2')
				.classList.add('btn-success');
			document.getElementById('profile-btn-2').innerHTML = 'Save Changes';
		}
	};

	const confirmPostDeletion = (e) => {
		e.stopPropagation();
		e.preventDefault();
		console.log(e.target.value);
		window.confirm('Do you really want to delete the post?');

		alert('warning', 'POST HAS BEEN DELETED...');
	};

	const confirmUserDeletion = (e) => {
		e.stopPropagation();
		e.preventDefault();
		console.log(e.target.value);
		window.confirm('Do you really want to delete the post?');

		alert('warning', 'USER HAS BEEN DELETED...');
	};

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitForm = () => {
		alert('success', 'profile changed');
		window.location.reload();
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
												style={{ marginBottom: '1rem' }}
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
															</div>
															<div className='who-check'>
																<label
																	className='form-label'
																	htmlFor='lastname'
																>
																	Change role
																</label>
																<div></div>
																<div className='who-radio'>
																	<input
																		type='radio'
																		id='student'
																		name='role'
																		value='Student'
																		onChange={(
																			e
																		) => {
																			onChange(
																				e
																			);
																		}}
																	/>
																	<label
																		className='who-input'
																		htmlFor='student'
																	>
																		{' '}
																		Student
																	</label>{' '}
																</div>
																<div className='who-radio'>
																	<input
																		type='radio'
																		id='professor'
																		name='role'
																		value='Professor'
																		onChange={(
																			e
																		) => {
																			onChange(
																				e
																			);
																		}}
																	/>
																	<label
																		className='who-input'
																		htmlFor='professor'
																	>
																		Professor
																	</label>
																</div>
																<div className='who-radio'>
																	<input
																		type='radio'
																		id='tutor'
																		name='role'
																		value='Tutor'
																		onChange={(
																			e
																		) => {
																			onChange(
																				e
																			);
																		}}
																	/>
																	<label
																		className='who-input'
																		htmlFor='tutor'
																	>
																		Tutor
																	</label>
																</div>{' '}
															</div>
														</form>
													</div>
												)}
												<h3>CREATED POSTS</h3>
												<div className='row row-cols-1 row-cols-md-2 g-4'>
													{posts.map((post, i) => {
														let srcImg = noImage;
														if (post.data) {
															let src =
																'data:image/png;base64,';
															src += post.data;
															if (
																src.length >
																	30 &&
																post.name !==
																	'fake'
															) {
																srcImg = src;
															}
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
																			srcImg
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
