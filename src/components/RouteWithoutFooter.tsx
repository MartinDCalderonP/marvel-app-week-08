import React from 'react';
import { Route } from 'react-router-dom';
import { IWrapperProps } from '../common/interfaces';
import Navbar from '../components/Navbar';

export default function RouteWithFooter({ children, ...rest }: IWrapperProps) {
	return (
		<Route {...rest}>
			<Navbar />
			{children}
		</Route>
	);
}
