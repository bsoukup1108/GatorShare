import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../../http-common';
import noImage from '../../img/noImage.jpeg';
import Spinner from '../misc/Spinner';
import moment from 'moment';
import test from '../../img/sfsu.jpeg';

const Post = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);

	const [likes, setLikes] = useState(0);

	const navigate = useNavigate();

	const postId = 1;

	const onLike = (e) => {
		let icon = document.getElementById('like-icon');

		icon.style.color =
			icon.style.color === 'rebeccapurple' ? 'grey' : 'rebeccapurple';
	};

	const incLikes = () => {
		setLikes(likes + 1);
	};

	useEffect(() => {
		http(`/posts`)
			.then((res) => {
				setPost(
					res.data.map((post) => {
						return post.id === postId ? post : '';
					})
				);

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
		if (document.getElementById('postCommentList')) {
			document.getElementById('postCommentList').remove();
		}
		document.getElementById('leaveComment').value = '';

		let el = document.getElementById('leftComment');
		let div = document.createElement('div');
		div.setAttribute('class', 'commentMessage');

		// DON'T CHANGE CLASS TO CLASSNAME below !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		div.innerHTML = `<p class='commentAuthor'> <small class='text-muted text-left'>Author: anonimous</small></p>`;
		div.innerHTML += `<p class='commentContent'>${comment.commentArea}</p>`;
		div.innerHTML += `<p class='commentDate'><small class='text-muted'><i>${moment().fromNow()}</i></small></p>`;
		// DON'T CHANGE CLASS TO CLASSNAME up !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

		el.appendChild(div);
		setComment('');
	};

	if (isLoaded) {
		const { content, createdDate, title } = post[0];
		const { firstName, lastName } = post[0].user;

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
										src={test}
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
														{firstName} {lastName}
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
							<div className='' id='commentArea'>
								<textarea
									id='leaveComment'
									className='form-control'
									placeholder='Leave a comment'
									name='commentArea'
									onChange={(e) => {
										onComment(e);
									}}
								></textarea>
							</div>
							<input
								className='comment-btn'
								type='submit'
								value='Leave a comment'
								onClick={(e) => {
									postComment(e);
								}}
							/>
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
