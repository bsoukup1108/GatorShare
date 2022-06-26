import './css/App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Footer from './components/footer/Footer';

const App = () => (
	<BrowserRouter>
		<>
			<div id='wrapper'>
				<Navbar />
				<div className='container'>
					<Routes>
						<Route exact path='/about' element={<About />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</>
	</BrowserRouter>
);

export default App;
