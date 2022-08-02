import React from 'react';
import logo from '../../img/logo.png';
import http from '../../http-common';
import { ReactSession } from 'react-client-session';
import { alert } from '../../js/alert';

let currNum = 0;
let prevNum = 0;

setInterval(function () {
	const currUser = ReactSession.get('currentUserId');
	if (currUser) {
		http('GroupChat', {})
			.then((res) => {
				currNum = res.data.length;
			})
			.catch((e) => {
				console.log(e);
			});
		if (currNum > prevNum && prevNum !== 0) {
			let diff = currNum - prevNum;

			let notif = document.getElementById('notif-nav-1');
			if (notif && window.location.pathname !== '/messages')
				notif.setAttribute('class', 'dropdown me-1 notif-nav-2');
			let notifBox = document.getElementById('notifications-1');

			if (notifBox && window.location.pathname !== '/messages') {
				if (
					notifBox.innerHTML ===
					"<p>You don't have any notifications yet</p>"
				) {
					notifBox.innerHTML = '';
				}

				let para = document.createElement('p');
				let innerTextNode = document.createTextNode(
					`${diff} new message(s) in Group Chat`
				);
				alert(
					'success',
					`${diff} you recieved new message(s) in the group chat`
				);

				para.appendChild(innerTextNode);

				//	notifBox.appendChild(para);
			}
		}
		prevNum = currNum;
	}
}, 1000);

const Footer = () => {
	return (
		<>
			<footer className='gradient-hor bg-pan-right flex-center'>
				<div id='footerContent'>
					<div className='text-muted' id='footer-left'>
						<p>
							<small>San Francisco State University</small>
						</p>
						<p>
							<small>1600 Holloway Avenue</small>
						</p>
						<p>
							<small>San Francisco, CA 94132</small>
						</p>
						<p>
							<small>(415) 338-1111</small>
						</p>
						<p>
							<small>A California State University Campus</small>
						</p>
					</div>

					<div className='text-muted' id='footer-center'>
						<div id='footer-center-top'>
							<a href='/about'>
								<p>
									<small>About Us</small>
								</p>{' '}
							</a>
							<a href='/rules'>
								<p>
									<small>Terms & Conditions</small>
								</p>
							</a>
							<a href='mailto:testh@example.com'>
								<p>
									<small>Contact Us</small>
								</p>
							</a>
						</div>
						<div id='footer-center-bottom'>
							<a href='https://www.sfsu.edu/'>
								<i className='fa-solid fa-school fa-2x'></i>
							</a>
							<a href='https://www.twitter.com/'>
								<i className='fa-brands fa-twitter fa-2x'></i>
							</a>
							<a href='https://www.instagram.com/'>
								<i className='fa-brands fa-instagram fa-2x'></i>
							</a>
						</div>
					</div>
					<div>
						<div id='footer-right'>
							<img id='logo' src={logo} alt='logo' />

							<span className='text-muted'>
								<p>
									<small>
										<span>TEAM #1 </span> |{' '}
										<span>CSC648</span> | <span>SFSU </span>{' '}
										| <span>SUMMER 2022</span>
									</small>
								</p>
							</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
