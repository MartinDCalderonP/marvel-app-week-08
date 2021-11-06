import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
// import { useCounter } from './context/Context';
import { paths } from './common/enums';
import RouteWithSearch from './components/RouteWithSearch';
import RouteWithoutSearch from './components/RouteWithoutSearch';
import Home from './pages/Home';
import Characters from './pages/Characters';

export default function App() {
	// const { state, dispatch } = useCounter();

	return (
		<Router>
			<Switch>
				<RouteWithoutSearch exact path={paths.home}>
					<Home />
				</RouteWithoutSearch>

				<RouteWithSearch path={`${paths.characters}${paths.page}=:page`}>
					<Characters />
				</RouteWithSearch>

				<RouteWithSearch
					path={`${paths.search}:searchedTerm${paths.page}=:page`}
				>
					<Characters />
				</RouteWithSearch>

				<Redirect to={{ pathname: `${paths.home}` }} />
			</Switch>
		</Router>
	);
}
