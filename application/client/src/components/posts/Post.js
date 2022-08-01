import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { alert } from '../../js/alert';
import { getToken } from '../../js/useToken';
import http from '../../http-common';
import noImage from '../../img/noImage.jpeg';
import Spinner from '../misc/Spinner';

const Post = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);
	const isAuth = !!getToken();

	//const [bImage, setBImage] = useState(null);

	const [likes, setLikes] = useState(0);

	const onLike = (e) => {
		let icon = document.getElementById('like-icon');

		alert('info', 'post has been liked!');

		icon.style.color =
			icon.style.color === 'rebeccapurple' ? 'grey' : 'rebeccapurple';
	};

	const { id } = useParams();
	let postId = id || 1;

	const incLikes = () => {
		setLikes(likes + 1);
	};

	useEffect(() => {
		http.get(`/AllPosts/{id}?query=${postId}`)
			.then((res) => {
				// let b = res.data[0].data;
				// let src = 'data:image/png;base64,';
				// src += b;

				// if (src.length > 30 && res.data[0].name !== 'fake') {
				// 	setBImage(src);
				// 	setIsLoaded(true);
				// }
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

	const postComment = (e) => {
		e.preventDefault();
		http.post(`/comments`, {
			postid: postId,
			text: comment.commentArea,
		})
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					let commentDiv = document.getElementById('leaveComment');
					commentDiv.value = '';
					setComment('');
					setIsLoaded(true);
				}
			})
			.catch((e) => {
				setIsLoaded(false);
				console.log(e);
			});
	};
	const { content, user, createdDate, title, tag, image } = post;
	let fname;
	let lname;
	let phLikes;
	let userId;
	let contentDesc;
	let Tag;
	fname = post.user ? user.firstName : '_';
	lname = post.user ? user.lastName : 'Anonymous';
	phLikes = post.photo_Like ? post.photo_Like : 0;
	userId = post.user ? (post.user.id ? post.user.id : null) : null;
	Tag = tag !== null ? tag : 'No description';
	contentDesc = tag !== null ? tag : 'No tag';
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
										src={noImage}
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
												{contentDesc}
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
															href={`/user/${userId}`}
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
