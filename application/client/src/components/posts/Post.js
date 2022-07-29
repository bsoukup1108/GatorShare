import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../../http-common';
import noImage from '../../img/noImage.jpeg';
import Spinner from '../misc/Spinner';
import moment from 'moment';
import test from '../../img/sfsu.jpeg';
import { ReactSession } from 'react-client-session';

import { useParams } from 'react-router-dom';

import { alert } from '../../js/alert';
import { getToken } from '../../js/useToken';

const Post = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);
	const [isAuth, setIsAuth] = useState(!!getToken());

	const [likes, setLikes] = useState(0);

	const navigate = useNavigate();

	const onLike = (e) => {
		let icon = document.getElementById('like-icon');

		alert('info', 'post has been liked!');

		icon.style.color =
			icon.style.color === 'rebeccapurple' ? 'grey' : 'rebeccapurple';
	};

	const { id } = useParams();
	let postId = id | 1;

	const incLikes = () => {
		setLikes(likes + 1);
	};

	useEffect(() => {
		http.get(`/AllPosts/%7Bid%7D?query=${postId}`)
			.then((res) => {
				setPost(res.data[0]);

				setIsLoaded(true);
			})
			.catch((e) => {
				setIsLoaded(false);
				console.log(e);
			});
	}, []);
	const [comment, setComment] = useState({
		comment: '',
	});
	const onComment = (e) => {
		setComment({
			[e.target.name]: e.target.value,
		});
	};

	const onCommentSend = () => {};

	// const appendComment = () => {
	// 	let el = document.getElementById('leftComment');
	// 	console.log(el);
	// 	let div = document.createElement('div');
	// 	div.setAttribute('className', 'comment');
	// 	div.innerHTML = `<p>${comment}</p>`;
	// 	el.appendChild(div);
	// };

	const postComment = (e) => {
		e.preventDefault();

		http.post(`/post/${postId}/comments`, {
			text: comment.commentArea,
		})
			.then((res) => {
				console.log(res);
			})
			.catch((e) => {
				setIsLoaded(false);

				console.log(e);
			});

		setComment('');
	};
	const { content, createdDate, title, photo_Like } = post;
	let fname;
	let lname;
	let phLikes;

	fname = post.user ? post.user.firstName : '_';
	lname = post.user ? post.user.lastName : '';
	phLikes = post.photo_Like ? post.photo_Like : 0;

	useEffect(() => {
		setLikes(phLikes);
	}, [phLikes]);
	if (isLoaded) {
		return (
			<>
				{isLoaded && (
					<div style={{ marginBottom: '1rem' }}>
						<div className='likePost' onClick={() => incLikes()}>
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

						<div className='card mb-3'>
							<div className='row g-0'>
								<div className='col-md-4'>
									<img
										src={post.image ? post.image : noImage}
										className='img-fluid rounded-start'
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
												{content
													? content
													: 'No description...'}
											</p>
										</div>
										<div>
											<p className='card-text-bottom'>
												<small className='text-muted'>
													Created by{' '}
													<i>
														{fname} {lname}
													</i>
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
									{comments === []
										? ''
										: 'there is no comments yet ... Be the first to comment!'}
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
