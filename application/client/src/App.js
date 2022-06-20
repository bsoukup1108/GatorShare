import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Footer from './components/footer/Footer';

const App = () => (
	<BrowserRouter>
		<Fragment>
			<Navbar />
			<Routes>
				<Route exact path='/about' element={<About />} />
			</Routes>
			<Footer />
		</Fragment>
	</BrowserRouter>
);

export default App;
