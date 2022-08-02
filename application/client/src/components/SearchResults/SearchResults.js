/**************************************************************
 * Class:  CSC-648 Summer 2022
 * Author: Aleksandr Gusev, Brianna Soukup
 * Project: Gatorshare website
 * File: SearchResults.js
 * Description: this file includes all functions and components
 * required for search functionality
 **************************************************************/

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { ReactSession } from 'react-client-session';
import http from '../../http-common';
import Spinner from '../misc/Spinner';

import art from '../../img/art.jpeg';
import articles from '../../img/articles.jpg';
import club from '../../img/club.jpg';
import other from '../../img/other.png';
import discord from '../../img/discord.png';
import tutor from '../../img/tutor.jpg';

// the main component that handles search results
const SearchResults = () => {
	// flag to indicate when results are fetched
	const [isLoaded, setIsLoaded] = useState(false);
	const [posts, setPosts] = useState([]);
	// redirects to another component within react component
	const navigate = useNavigate();
	// what we search for
	let searchTerm = ReactSession.get('searchTerm');
	// get the searched category
	let category = ReactSession.get('category');

	let homeSearch = ReactSession.get('searchRes');

	// define the endpoint for the search depending on the category
	let searchURL = `/search?query=${searchTerm}`;

	if (homeSearch) {
		if (homeSearch === 'recent') {
			searchURL = `/search/{ASC}`;
		} else {
			searchURL = `/search/{Like}`;
		}
		ReactSession.remove('searchRes');
	} else if (category === 'Articles&Essays') {
		searchURL = `/search/{Article}?query=${searchTerm}`;
	} else if (category === 'Art&Films') {
		searchURL = `/search/{ArtAndFilm}?query=${searchTerm}`;
	} else if (category === 'Clubs') {
		searchURL = `/search/{Clubs}?query=${searchTerm}`;
	} else if (category === 'Discords') {
		searchURL = `/search/{Discord}?query=${searchTerm}`;
	} else if (category === 'Other') {
		searchURL = `/search/{Others}?query=${searchTerm}`;
	} else if (category === 'Tutoring') {
		searchURL = `/search/{Tutoring}?query=${searchTerm}`;
	}

	// set search category dropdown to indicate category
	if (category) {
		if (category === '') {
			document.getElementById('search-button-1').innerHTML = 'Category';
		} else {
			document.getElementById('search-button-1').value = category;
			document.getElementById('search-button-1').innerHTML = category;
		}
	}

	// the search request.
	useEffect(() => {
		http.get(searchURL)
			.then((res) => {
				// set results when fetched
				setPosts(res.data);
				// indicate that the page can be loaded
				setIsLoaded(true);
			})
			// handle errors
			.catch((e) => {
				setIsLoaded(false);
				console.log(e);
			});
	}, []);

	// filtering withing the category by name
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

	// filtering withing the category by most recent
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
		return val;
	};

	// filtering withing the category by most popular
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
		return val;
	};

	// render the results
	return (
		<>
			{/* load spinner until results are ready to be rendereds */}
			{!isLoaded && <Spinner />}
			{!isLoaded && posts === [] && (
				<div>
					<h1>NO RESULTS</h1>
				</div>
			)}
			{/* render a header depending on the categorys */}
			{isLoaded && !!posts && posts !== [] && (
				<div>
					{category === 'Articles&Essays' ? (
						<div className='header-image-1'>
							<h1 className='header-text'> Articles & Essays </h1>
						</div>
					) : null}
					{category === 'Art&Films' ? (
						<div className='header-image-2'>
							<h1 className='header-text'> Art & Films </h1>
						</div>
					) : null}
					{category === 'Discords' ? (
						<div className='header-image-3'>
							<h1 className='header-text'> Discords </h1>
						</div>
					) : null}
					{category === 'Clubs' ? (
						<div className='header-image-4'>
							<h1 className='header-text'> Clubs </h1>
						</div>
					) : null}
					{category === 'Other' ? (
						<div className='header-image-5'>
							<h1 className='header-text'>Other</h1>
						</div>
					) : null}
					{category === 'Tutoring' ? (
						<div className='header-image-6'>
							<h1 className='header-text'> Tutoring </h1>
						</div>
					) : null}
					{(category === '') |
					(category === 'Category') |
					(category === 'All Posts') ? (
						<div className='header-image-7'>
							<h1 className='header-text'> SEARCH RESULTS </h1>
						</div>
					) : null}
					{/* sort dropdown */}
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
										href='#!'
										onClick={() => setPosts(filterByName())}
									>
										Alphabetically{' '}
									</a>
								</li>
								<li>
									<a
										className='dropdown-item'
										href='#!'
										onClick={() => setPosts(filterByDate())}
									>
										Most recent
									</a>
								</li>
								<li>
									<a
										className='dropdown-item'
										href='#!'
										onClick={() => setPosts(filterByLike())}
									>
										Most popular
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* return if no posts found */}
					{posts.length === 0 ? (
						<h1>WE DIDN'T FIND ANYTHING</h1>
					) : (
						<div
							style={{ marginBottom: '1rem', marginTop: '1rem' }}
						>
							<div className='row row-cols-1 row-cols-md-3 g-4'>
								{/* map through possts array and render each post */}
								{posts.map((post, i) => {
									let img;

									let tagg = post.tag ? post.tag : 'Other';

									if (tagg === 'Articles & Essays') {
										img = articles;
									} else if (tagg === 'Art & Film') {
										img = art;
									} else if (tagg === 'Clubs') {
										img = club;
									} else if (tagg === 'Discords') {
										img = discord;
									} else if (tagg === 'Tutoring') {
										img = tutor;
									} else {
										img = other;
									}

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
														`/posts/${post.id}`
													);
													return false;
												}}
											>
												<img
													src={img}
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

// export SearchResults as default
export default SearchResults;
