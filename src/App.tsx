import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
// import { useCounter } from './context/Context';
import { paths } from './common/enums';
import RouteWithoutFooter from './components/RouteWithoutFooter';
import RouteWithFooter from './components/RouteWithFooter';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import Stories from './pages/Stories';

export default function App() {
	// const { state, dispatch } = useCounter();

	return (
		<Router>
			<Switch>
				<RouteWithoutFooter exact path={paths.home}>
					<Home />
				</RouteWithoutFooter>

				<RouteWithFooter path={`${paths.characters}${paths.page}:page`}>
					<Characters />
				</RouteWithFooter>

				<RouteWithFooter
					path={`${paths.characters}${paths.comic}:comic${paths.page}:page`}
				>
					<Characters />
				</RouteWithFooter>

				<RouteWithFooter
					path={`${paths.characters}${paths.story}:story${paths.page}:page`}
				>
					<Characters />
				</RouteWithFooter>

				<RouteWithFooter path={`${paths.comics}${paths.page}:page`}>
					<Comics />
				</RouteWithFooter>

				<RouteWithFooter
					path={`${paths.comics}${paths.format}:format${paths.page}:page`}
				>
					<Comics />
				</RouteWithFooter>

				<RouteWithFooter path={`${paths.stories}${paths.page}:page`}>
					<Stories />
				</RouteWithFooter>

				<RouteWithFooter
					path={`${paths.characters}${paths.search}:searchedTerm${paths.page}:page`}
				>
					<Characters />
				</RouteWithFooter>

				<RouteWithFooter
					path={`${paths.comics}${paths.search}:searchedTerm${paths.page}:page`}
				>
					<Comics />
				</RouteWithFooter>

				<RouteWithFooter
					path={`${paths.stories}${paths.search}:searchedTerm${paths.page}:page`}
				>
					<Stories />
				</RouteWithFooter>

				<Redirect to={{ pathname: `${paths.home}` }} />
			</Switch>
		</Router>
	);
}
