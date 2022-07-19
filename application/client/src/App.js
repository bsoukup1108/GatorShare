import './css/App.css';
import React, { useEffect, useState, Suspense } from 'react';
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
import Spinner from './components/misc/Spinner';
import Agreement from './components/misc/Agreement';

import { alert } from './js/alert';

import { ReactSession } from 'react-client-session';

const PostsLayout = React.lazy(() => import('./components/posts/Posts'));
const PostLayout = React.lazy(() => import('./components/posts/Post'));
const Aboutus = React.lazy(() => import('./components/about/About'));
const Search = React.lazy(() =>
	import('./components/SearchResults/SearchResults')
);

const App = () => {
	ReactSession.setStoreType('localStorage');

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
							<Route
								path='/about'
								element={
									<Suspense fallback={<Spinner />}>
										<About />
									</Suspense>
								}
							/>

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
								<Route
									exact
									path='/create'
									element={<CreatePost />}
								/>
							)}
							<Route
								exact
								path='/posts'
								element={
									<Suspense fallback={<Spinner />}>
										<PostsLayout />
									</Suspense>
								}
							/>
							{
								<Route
									path='/post/:id'
									element={
										<Suspense fallback={<Spinner />}>
											<PostLayout />
										</Suspense>
									}
								/>
							}
						</Routes>
					</div>
					<Footer />
				</div>
			</>
		</BrowserRouter>
	);
};

export default App;
