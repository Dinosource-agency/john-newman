import { FunctionComponent } from 'preact';
import { NavigationLayoutProps } from './NavigationLayout.types.ts';
import { Navigation } from '~/components';

export const NavigationLayout: FunctionComponent<NavigationLayoutProps> = ({
	children,
}) => {
	return (
		<>
			<Navigation />
			<main>{children}</main>
		</>
	);
};
