import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
// import { useCounter } from './context/Context';
import { paths } from './common/enums';
import RouteWithFooter from './components/RouteWithFooter';
import Home from './pages/Home';
import Characters from './pages/Characters';

export default function App() {
	// const { state, dispatch } = useCounter();

	return (
		<Router>
			<Switch>
				<RouteWithFooter exact path="/">
					<Home />
				</RouteWithFooter>

				<RouteWithFooter exact path={`${paths.characters}`}>
					<Characters />
				</RouteWithFooter>

				<Redirect to={{ pathname: '/' }} />
			</Switch>
		</Router>
	);
}
