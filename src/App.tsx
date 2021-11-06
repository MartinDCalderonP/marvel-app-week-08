import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
// import { useCounter } from './context/Context';
import { paths } from './common/enums';
import RouteWithFooter from './components/RouteWithFooter';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Search from './pages/Search';

export default function App() {
	// const { state, dispatch } = useCounter();

	return (
		<Router>
			<Switch>
				<RouteWithFooter exact path={paths.home}>
					<Home />
				</RouteWithFooter>

				<RouteWithFooter path={`${paths.characters}${paths.page}=:page`}>
					<Characters />
				</RouteWithFooter>

				<RouteWithFooter
					path={`${paths.search}:searchedTerm`}
				>
					<Search />
				</RouteWithFooter>

				<Redirect to={{ pathname: `${paths.home}` }} />
			</Switch>
		</Router>
	);
}
