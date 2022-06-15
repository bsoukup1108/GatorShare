import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';

const App = () => (
	<BrowserRouter>
		<Fragment>
			<Navbar />
			<Routes>
				<Route exact path='/about' element={<About />} />
			</Routes>
		</Fragment>
	</BrowserRouter>
);

export default App;
