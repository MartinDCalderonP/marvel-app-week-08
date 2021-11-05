import React from 'react';
import { Route } from 'react-router-dom';
import { ICustomRoute } from '../common/interfaces';
import Navbar from './Navbar';
import Footer from './Footer';

export default function RouteWithFooter({ element, ...rest }: ICustomRoute) {
	return (
		<Route
			{...rest}
			element={
				<>
					<Navbar />
					{element}
					<Footer />
				</>
			}
		/>
	);
}
