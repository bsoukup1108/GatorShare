import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../../http-common';
import noImage from '../../img/noImage.jpeg';
import Spinner from '../misc/Spinner';
import moment from 'moment';

const Post = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);

	const navigate = useNavigate();

	const postId = 1;

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

	if (isLoaded) {
		const { content, createdDate, title } = post[0];
		const { firstName, lastName } = post[0].user;

		return (
			<>
				{isLoaded && (
					<div style={{ marginBottom: '1rem' }}>
						<div className='card mb-3'>
							<div className='row g-0'>
								<div className='col-md-4'>
									<img
										src={post.image ? noImage : noImage}
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
										? 'comments will be here'
										: 'there is no comments yet ... Be the first to comment!'}
								</div>
							</div>
							<div className='' id='commentArea'>
								<textarea
									className='form-control'
									placeholder='Leave a comment'
									name='commentArea'
									//value={}
								></textarea>
							</div>
							<input
								className='comment-btn'
								type='submit'
								value='Leave a comment'
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
