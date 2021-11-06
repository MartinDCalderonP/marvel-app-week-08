import React from 'react';
import { Route } from 'react-router-dom';
import { ICustomRoute } from '../common/interfaces';
import Navbar from './Navbar';
import Footer from './Footer';

export default function RouteWithoutSearch({
	children,
	...rest
}: ICustomRoute) {
	return (
		<Route {...rest}>
			<Navbar />
			{children}
			<Footer />
		</Route>
	);
}
