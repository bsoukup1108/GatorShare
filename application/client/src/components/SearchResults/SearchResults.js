import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../../http-common';
import noImage from '../../img/noImage.jpeg';
import Spinner from '../misc/Spinner';
import moment from 'moment';
import { ReactSession } from 'react-client-session';

import header from '../../img/Articles&Essays-header.jpg';

const SearchResults = (props) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();
	let searchTerm = ReactSession.get('searchTerm');
	let category = ReactSession.get('category');

	let searchURL = `/search?query=${searchTerm}`;
	if (category == 'Articles&Essays') {
		searchURL = `/search/{Article}?query=${searchTerm}`;
	} else if (category == 'Art&Films') {
		searchURL = `/search/{ArtAndFilm}?query=${searchTerm}`;
	} else if (category == 'Clubs') {
		searchURL = `/search/{Clubs}?query=${searchTerm}`;
	} else if (category == 'Discords') {
		searchURL = `/search/{Discord}?query=${searchTerm}`;
	} else if (category == 'Other') {
		searchURL = `/search/{Other}?query=${searchTerm}`;
	} else if (category == 'Tutoring') {
		searchURL = `/search/{Tutoring}?query=${searchTerm}`;
	}

	if (category) {
		if (category === '') {
			document.getElementById('search-button-1').innerHTML = 'Category';
		} else {
			document.getElementById('search-button-1').value = category;
			document.getElementById('search-button-1').innerHTML = category;
		}
	}

	useEffect(() => {
		http.get(searchURL)
			.then((res) => {
				console.log(searchURL);
				setPosts(res.data);
				setIsLoaded(true);
			})

			.catch((e) => {
				setIsLoaded(false);
				console.log(e);
			});
	}, []);

	const filterByName = () => {
		let datafil = posts;
		let val = datafil.sort(function (a, b) {
			let dateA = a.title[0].toLowerCase();
			let dateB = b.title[0].toLowerCase();

			if (dateA < dateB) {
				return -1;
			} else if (dateA > dateB) {
				return 1;
			}
			return 0;
		});
		return val;
	};
	const filterByDate = () => {
		let datafil = posts;
		let val = datafil.sort(function (a, b) {
			let dateA = a.createdDate;
			let dateB = b.createdDate;

			if (dateA < dateB) {
				return -1;
			} else if (dateA > dateB) {
				return 1;
			}
			return 0;
		});
		console.log(val);
		return val;
	};

	const filterByLike = () => {
		let datafil = posts;
		let val = datafil.sort(function (a, b) {
			let dateA = a.id;
			let dateB = b.id;

			if (dateA < dateB) {
				return -1;
			} else if (dateA > dateB) {
				return 1;
			}
			return 0;
		});
		console.log(val);
		return val;
	};

	return (
		<>
			{!isLoaded && <Spinner />}
			{!isLoaded && posts === [] && (
				<div>
					<h1>NO RESULTS</h1>
				</div>
			)}
			{isLoaded && !!posts && posts !== [] && (
				<div>
					{category == 'Articles&Essays' ? (
						<div className='header-image-1'>
							<h1 className='header-text'> Articles & Essays </h1>
						</div>
					) : null}
					{category == 'Art&Films' ? (
						<div className='header-image-2'>
							<h1 className='header-text'> Art & Films </h1>
						</div>
					) : null}
					{category == 'Discords' ? (
						<div className='header-image-3'>
							<h1 className='header-text'> Discords </h1>
						</div>
					) : null}
					{category == 'Clubs' ? (
						<div className='header-image-4'>
							<h1 className='header-text'> Clubs </h1>
						</div>
					) : null}
					{category == 'Other' ? (
						<div className='header-image-5'>
							<h1 className='header-text'>Other</h1>
						</div>
					) : null}
					{category == 'Tutoring' ? (
						<div className='header-image-6'>
							<h1 className='header-text'> Tutoring </h1>
						</div>
					) : null}
					{(category == '') |
					(category == 'Category') |
					(category == 'All Posts') ? (
						<div className='header-image-7'>
							<h1 className='header-text'> SEARCH RESULTS </h1>
						</div>
					) : null}
					<div id='sort'>
						<div className='dropdown'>
							<button
								className='btn btn-secondary dropdown-toggle sort-btn'
								type='button'
								id='dropdownMenuButton1'
								data-bs-toggle='dropdown'
								aria-expanded='false'
							>
								Sort by
							</button>
							<ul
								className='dropdown-menu'
								aria-labelledby='dropdownMenuButton1'
							>
								<li>
									<a
										className='dropdown-item'
										href='#'
										onClick={() => setPosts(filterByName())}
									>
										Alphabetically{' '}
									</a>
								</li>
								<li>
									<a
										className='dropdown-item'
										href='#'
										onClick={() => setPosts(filterByDate())}
									>
										Most recent
									</a>
								</li>
								<li>
									<a
										className='dropdown-item'
										href='#'
										onClick={() => setPosts(filterByLike())}
									>
										Most popular
									</a>
								</li>
							</ul>
						</div>
					</div>

					{posts.length === 0 ? (
						<h1>WE DIDN'T FIND ANYTHING</h1>
					) : (
						<div
							style={{ marginBottom: '1rem', marginTop: '1rem' }}
						>
							<div className='row row-cols-1 row-cols-md-3 g-4'>
								{posts.map((post, i) => {
									return posts.length === 0 ? (
										<div>
											<h1>WE DIDN'T FIND ANYTHING</h1>
										</div>
									) : (
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
																{post.createdDate
																	? moment(
																			post.createdDate
																	  )
																			.startOf(
																				'day'
																			)
																			.fromNow()
																	: ''}{' '}
															</i>
															by{' '}
															<strong>
																{post.user
																	? post.user
																			.firstName
																	: 'Anonymous'}{' '}
																{post.user
																	? post.user
																			.lastName
																	: 'User'}
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
					)}
				</div>
			)}
		</>
	);
};

export default SearchResults;
