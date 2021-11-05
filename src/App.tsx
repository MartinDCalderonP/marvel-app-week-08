import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
// import { useCounter } from './context/Context';
// import RouteWithFooter from './components/RouteWithFooter';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
	// const { state, dispatch } = useCounter();

	return (
		<Router>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />

				<Navigate to={{ pathname: '/' }} />
			</Routes>

			<Footer />
		</Router>
	);
}
