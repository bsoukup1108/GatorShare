import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../../http-common';
import noImage from '../../img/noImage.jpeg';
import Spinner from '../misc/Spinner';

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
					<div style={{ 'margin-bottom': '1rem' }}>
						<div className='row row-cols-1 row-cols-md-3 g-4'>
							{posts.map((post, i) => {
								return (
									<div className='col'>
										<div
											className='card posts'
											onClick={() => {
												navigate(`/${post.id}`);
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
														'white-space': 'nowrap',
														overflow: 'hidden',
														'text-overflow':
															'ellipsis',
														'max-width': '500px',
													}}
												>
													{post.description
														? post.description
														: 'No description...'}
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
