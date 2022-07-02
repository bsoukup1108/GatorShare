import './css/App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import SearchResults from './components/SearchResults/SearchResults';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import Profile from './components/profile/Profile';

const App = () => (
	<BrowserRouter>
		<>
			<div id='wrapper'>
				<Navbar />
				<div className='container'>
					<Routes>
						<Route exact path='/signup' element={<SignUp />} />
						<Route exact path='/login' element={<Login />} />
						<Route path='/search' element={<SearchResults />} />
						<Route exact path='/about' element={<About />} />
						<Route exact path='/profile' element={<Profile />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</>
	</BrowserRouter>
);

export default App;
