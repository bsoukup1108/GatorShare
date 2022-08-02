import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { alert } from '../../js/alert';
import { getToken } from '../../js/useToken';
import http from '../../http-common';
import SFSU1 from '../../img/sfsu.jpeg';
import Spinner from '../misc/Spinner';
import { ReactSession } from 'react-client-session';
import httpFormData from '../../http-form-data';

const Post = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isLoadedC, setIsLoadedC] = useState(false);

	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);
	const isAuth = !!getToken();

	const [likes, setLikes] = useState(0);
	const [likeflag, setLikeflag] = useState(false);

	const onLike = (e) => {
		let icon = document.getElementById('like-icon');

		alert('info', 'post has been liked!');

		icon.style.color =
			icon.style.color === 'rebeccapurple' ? 'grey' : 'rebeccapurple';
	};
	let inc = 0;

	const [userQ, setUserQ] = useState([]);

	const { id } = useParams();
	let postId = id || 1;
	const userId_ttt = ReactSession.get('currentUserId');

	const incLikes = () => {
		if (likeflag) {
			setLikes(likes - 1);
			setLikeflag(false);
		} else {
			setLikes(likes + 1);

			setLikeflag(true);
		}
	};

	useEffect(() => {
		http.get(`/AllPosts/{id}?query=${postId}`)
			.then((res) => {
				setPost(res.data[0]);
				console.log(res.data);

				if (res.data[0].user_ID) {
					let user = res.data[0].user_ID;
					http.get(`/login/id/${user}`).then((res) => {
						setUserQ(res.data);
					});
				}

				setIsLoaded(true);
			})
			.catch((e) => {
				setIsLoaded(false);
				console.log(e);
			});
	}, []);

	useEffect(() => {
		http.get(`/comments/{id}?query=${postId}`)
			.then((res) => {
				if (res.data) {
					res.data.map((el) => {
						setComments(res.data);
					});
				}
			})
			.catch((e) => {
				setIsLoadedC(false);
				console.log(e);
			});
	}, [inc]);
	const [comment, setComment] = useState({
		comment: '',
	});

	const onComment = (e) => {
		setComment({
			[e.target.name]: e.target.value,
		});
	};

	const appendComment = (text) => {
		let el = document.getElementById('postCommentList');

		let div = document.createElement('div');
		div.setAttribute('class', 'comment alert alert-primary');
		let date = 'Today';
		// DON'T CHANGE CLASS TO CLASSNAME below !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		div.innerHTML = `<small><a href='/profile' class='badge badge-primary'> <small >go to user's profile</small></a>`;
		div.innerHTML += `<p >${text}</p>`;
		div.innerHTML += `<p class='commentDate'><small class='text-muted'><i>${date}</i></small></p>`;
		// DON'T CHANGE CLASS TO CLASSNAME up !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		div.setAttribute('className', 'comment');
		if (el) {
			el.appendChild(div);
		}
	};

	const postComment = (e) => {
		e.preventDefault();

		let el2 = document.getElementById('leaveComment').value;

		appendComment(el2);
		httpFormData
			.post(`/comments`, {
				userId: userId_ttt,
				postId: postId,
				text: comment.commentArea,
			})
			.then((res) => {
				if (res.status === 200) {
					let commentDiv = document.getElementById('leaveComment');
					commentDiv.value = '';
					return setComment('');
				}
			})
			.catch((e) => {
				setIsLoaded(false);
				console.log(e);
			});
	};
	const { createdDate, title, tag, description } = post;
	let fname;
	let lname;
	let phLikes;
	let userId;
	let contentDesc;
	let Tag;
	let contentD;

	const { firstName, lastName, id: userrrID } = userQ;

	fname = firstName ? firstName : '_';
	lname = lastName ? lastName : 'Anonymous';
	phLikes = post.photo_Like ? post.photo_Like : 0;
	userId = userrrID ? userrrID : null;
	contentDesc = tag !== null ? tag : 'No tag';

	Tag = tag !== null ? tag : 'No description';
	contentDesc = tag !== null ? tag : 'No tag';
	contentD = description !== null ? description : 'No description';
	let commentss;

	commentss = comments.length > 0 ? comments : null;

	if (!isLoadedC && commentss !== null) {
		setIsLoadedC(true);
	}

	useEffect(() => {
		setLikes(phLikes);
	}, [phLikes]);
	if (isLoaded) {
		return (
			<>
				{isLoaded && (
					<div style={{ marginBottom: '1rem' }}>
						<div id='post-top'>
							<div
								className='likePost'
								onClick={() => incLikes()}
							>
								<button
									className='btn-like'
									onClick={(e) => onLike(e)}
								>
									<i
										id='like-icon'
										className='fa-regular fa-thumbs-up fa-xl'
									></i>
								</button>
								<small> {likes} liked this post</small>
							</div>
							<div id='post-tag-1'>
								<p>
									<span className='badge badge-primary'>
										{Tag}
									</span>
								</p>
							</div>
						</div>
						<div className='card mb-3'>
							<div className='row g-0'>
								<div className='col-md-4'>
									<img
										src={SFSU1}
										className='img-fluid rounded-start post-image-individual-1'
										alt='...'
									/>
								</div>
								<div className='col-md-8'>
									<div className='card-body'>
										<div>
											<h5 className='card-title'>
												{title ? title : 'No title...'}
											</h5>
											<p className='card-text'>
												{contentD}
											</p>
										</div>
										<div>
											<p className='card-text-bottom'>
												<small className='text-muted'>
													Created by{' '}
													{userId === null ? (
														<i>
															{!!fname
																? fname
																: 'Anonymous'}{' '}
															{!!lname
																? lname
																: 'User'}
														</i>
													) : (
														<a
															href={`/Tutor`}
															className='text-muted'
															id='link-profile'
														>
															<i>
																{!!fname
																	? fname
																	: 'Anonymous'}{' '}
																{!!lname
																	? lname
																	: 'User'}
															</i>
														</a>
													)}
												</small>
											</p>
											<p className='card-text-bottom'>
												<small className='text-muted'>
													<strong>
														{' '}
														{moment(createdDate)
															.startOf('day')
															.fromNow()}{' '}
													</strong>
												</small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div id='postComments'>
							<div className='' id='commentArea'>
								<label
									className='form-label'
									htmlFor='commentArea'
								>
									Comments
								</label>
								<div id='postCommentList'>
									{isLoadedC &&
										comments.map((el, i) => {
											let date = moment(
												Date.now()
											).calendar(null, {
												sameDay: '[Today]',
												nextDay: '[Tomorrow]',
												nextWeek: 'dddd',
												lastDay: '[Yesterday]',
												lastWeek: '[Last] dddd',
												sameElse: 'DD/MM/YYYY',
											});
											return (
												<div
													key={`1111111-${i}`}
													className='comment alert alert-primary'
												>
													<small>
														<a
															className='badge badge-primary'
															href={`/User/${el.userID}`}
														>
															go to user's profile
														</a>
													</small>
													<p>{el.text}</p>
													<small>{date}</small>
												</div>
											);
										})}
									{!isLoadedC &&
										'there is no comments yet ... Be the first to comment!'}
								</div>
								<div id='leftComment'></div>
							</div>
							{isAuth && (
								<>
									<div className='' id='commentArea'>
										<textarea
											id='leaveComment'
											className='form-control'
											placeholder='Leave a comment'
											name='commentArea'
											maxLength='250'
											required
											onChange={(e) => {
												onComment(e);
											}}
										></textarea>
									</div>
									<input
										className='comment-btn'
										type='submit'
										value='Leave a comment'
										onClick={(e) => postComment(e)}
									/>
								</>
							)}
						</div>
					</div>
				)}
			</>
		);
	} else {
		return <Spinner />;
	}
};

export default Post;
