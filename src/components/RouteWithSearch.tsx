import React from 'react';
import { Route } from 'react-router-dom';
import { ICustomRoute } from '../common/interfaces';
import Navbar from './Navbar';
import SearchInput from './SearchInput';
import Footer from './Footer';

export default function RouteWithSearch({ children, ...rest }: ICustomRoute) {
	return (
		<Route {...rest}>
			<Navbar />
			<SearchInput />
			{children}
			<Footer />
		</Route>
	);
}
