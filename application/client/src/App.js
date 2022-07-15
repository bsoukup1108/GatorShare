import './css/App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import SearchResults from './components/SearchResults/SearchResults';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import Profile from './components/profile/Profile';
import Messages from './components/messages/Messages';
import CreatePost from './components/posts/CreatePost';
import Posts from './components/posts/Posts';
import Home from './components/home/Home';

import { ReactSession } from 'react-client-session';

const App = () => {
	ReactSession.setStoreType('localStorage');

	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const token = ReactSession.get('token') || '';
	useEffect(() => {
		if (!!token) {
			setIsAuthenticated(true);
		}
	}, token);
	return (
		<BrowserRouter>
			<>
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
							<Route path='/search' element={<SearchResults />} />
							<Route exact path='/about' element={<About />} />
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
							<Route
								exact
								path='/create'
								element={<CreatePost />}
							/>
							<Route exact path='/posts' element={<Posts />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</>
		</BrowserRouter>
	);
};

export default App;
