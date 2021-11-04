import React from 'react';
// import { useCounter } from './context/Context';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
	// const { state, dispatch } = useCounter();

	return (
		<div>
			<Navbar />
			<Home />
			<Footer />
		</div>
	);
}
