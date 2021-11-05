import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
// import { useCounter } from './context/Context';
import RouteWithFooter from './components/RouteWithFooter';
import Home from './pages/Home';

export default function App() {
	// const { state, dispatch } = useCounter();

	return (
		<Router>
			<Switch>
				<RouteWithFooter path="/">
					<Home />
				</RouteWithFooter>

				<Redirect to={{ pathname: '/' }} />
			</Switch>
		</Router>
	);
}
