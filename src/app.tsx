import { FunctionComponent } from 'preact';
import { APP_ROUTES } from '~/main.const.ts';
import { HomeView } from '~/views';
import { Router, Route } from 'preact-router';

export const App: FunctionComponent = () => {
	return (
		<Router>
			<Route path={APP_ROUTES.home} component={HomeView} />
		</Router>
	);
};
