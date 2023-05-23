import { FunctionComponent } from 'preact';
import { NavigationLayoutProps } from './NavigationLayout.types.ts';

export const NavigationLayout: FunctionComponent<NavigationLayoutProps> = ({
	children,
}) => {
	return (
		<>
			<nav>
				<a href="/">Home</a>
				<a href="/terms">Terms</a>
			</nav>
			<main>{children}</main>
		</>
	);
};
