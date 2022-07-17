import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../../http-common';
import noImage from '../../img/noImage.jpeg';
import Spinner from '../misc/Spinner';
import moment from 'moment';

const Posts = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		http(`/posts`)
			.then((res) => {
				setPosts(res.data);
				setIsLoaded(true);
			})
			.catch((e) => {
				setIsLoaded(false);
				console.log(e);
			});
	}, []);

	return (
		<>
			{!isLoaded && <Spinner />}
			{isLoaded && (
				<div>
					<div id='sort'>
						<button className='sort-btn'>
							Sort alphabetically
						</button>
					</div>
					<div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
						<div className='row row-cols-1 row-cols-md-3 g-4'>
							{posts.map((post, i) => {
								return (
									<div
										key={`posts-post-${i}`}
										className='col'
									>
										<div
											className='card posts'
											onClick={() => {
												navigate(`/post/${post.id}`);
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
														whiteSpace: 'nowrap',
														overflow: 'hidden',
														textOverflow:
															'ellipsis',
														maxWidth: '500px',
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
																.startOf('day')
																.fromNow()}{' '}
														</i>
														by{' '}
														<strong>
															{
																post.user
																	.firstName
															}{' '}
															{post.user.lastName}
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
		</>
	);
};

export default Posts;
