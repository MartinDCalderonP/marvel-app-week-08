import React from 'react';
import { Route } from 'react-router-dom';
import { IWrapperProps } from '../common/interfaces';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RouteWithFooter({ children, ...rest }: IWrapperProps) {
	return (
		<Route {...rest}>
			<Navbar />
			{children}
			<Footer />
		</Route>
	);
}
