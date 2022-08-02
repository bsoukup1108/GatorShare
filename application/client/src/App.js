import './css/App.css';
import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactSession } from 'react-client-session';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import Messages from './components/messages/Messages';
import CreatePost from './components/posts/CreatePost';
import Posts from './components/posts/Posts';
import Home from './components/home/Home';
import Spinner from './components/misc/Spinner';
import Agreement from './components/misc/Agreement';
import Aboutus from './components/about/About';
import Post from './components/posts/Post';
import Profile from './components/profile/Profile';
import User from './components/profile/User';
import Tutor from './components/profile/Tutor';

//import ChatRoom from './components/chatRoom/ChatRoom';

const Search = React.lazy(() =>
	import('./components/SearchResults/SearchResults')
);

const App = () => {
	ReactSession.setStoreType('localStorage');
	//registered user nav
	//ReactSession.set('token', 'token');

	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const token = ReactSession.get('token') || '';

	useEffect(() => {
		if (!!token) {
			setIsAuthenticated(true);
		}
	}, [token]);
	return (
		<BrowserRouter>
			<>
				<div id='notifications'></div>
				<div id='wrapper'>
					<Navbar isAuthenticated={isAuthenticated} />

					<div className='container'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route exact path='/signup' element={<SignUp />} />
							{!isAuthenticated && (
								<Route
									exact
									path='/login'
									element={
										<Login
											isAuthenticated={isAuthenticated}
										/>
									}
								/>
							)}
							<Route
								path='/search'
								element={
									<Suspense fallback={<Spinner />}>
										<Search />
									</Suspense>
								}
							/>

							<Route path='/rules' element={<Agreement />} />
							<Route path='/about' element={<Aboutus />} />

							<Route path='/user/:id' element={<User />} />
							<Route path='/tutor' element={<Tutor />} />

							<Route
								exact
								path='/profile'
								element={<Profile />}
							/>
							<Route
								exact
								path='/messages'
								element={<Messages />}
							/>
							{isAuthenticated && (
								<Route path='/post' element={<CreatePost />} />
							)}

							<Route path='/posts' element={<Posts />} />
							{<Route path='/posts/:id' element={<Post />} />}
						</Routes>
					</div>
					<Footer />
				</div>
			</>
		</BrowserRouter>
	);
};

export default App;
