import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../../http-common';
import noImage from '../../img/noImage.jpeg';
import Spinner from './Spinner';
import moment from 'moment';
import test from '../../img/Discord-header2.jpg';

const Discords = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();

	const links = [
		{
			id: 1,
			link: 'https://discord.com/channels/882703721551790171/882703721551790172',
			content: 'Discord Link',
			title: 'THIS IS A LINK',
		},
		{
			id: 1,
			link: 'https://discord.com/channels/882703721551790171/882703721551790172',
			content: 'Discord Link',
			title: 'THIS IS A LINK',
		},
		{
			id: 1,
			link: 'https://discord.com/channels/882703721551790171/882703721551790172',
			content: 'Discord Link',
			title: 'THIS IS A LINK',
		},
		{
			id: 1,
			link: 'https://discord.com/channels/882703721551790171/882703721551790172',
			content: 'Discord Link',
			title: 'THIS IS A LINK',
		},
		{
			id: 1,
			link: 'https://discord.com/channels/882703721551790171/882703721551790172',
			content: 'Discord Link',
			title: 'THIS IS A LINK',
		},
		{
			id: 1,
			link: 'https://discord.com/channels/882703721551790171/882703721551790172',
			content: 'Discord Link',
			title: 'THIS IS A LINK',
		},
	];

	return (
		<>
			<div>
				<h1>Discord Links</h1>

				<div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
					<div className='row row-cols-1 row-cols-md-3 g-4'>
						{links.map((link, i) => {
							return (
								<div key={`links-link-${i}`} className='col'>
									<div className='card posts'>
										<img
											src={test}
											className='card-img-top'
											alt='No image...'
										/>
										<div className='card-body'>
											<h5 className='card-title'>
												<i>
													{link.title
														? link.title
														: 'No title...'}
												</i>
											</h5>
											<p
												className='card-text'
												style={{
													whiteSpace: 'nowrap',
													overflow: 'hidden',
													textOverflow: 'ellipsis',
													maxWidth: '500px',
												}}
											>
												{link.content
													? link.content
													: 'No description...'}
											</p>
											<button className='btn btn-dark'>
												<a href={link.link}>
													go to this server
												</a>
											</button>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Discords;
