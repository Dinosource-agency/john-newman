import { FunctionComponent } from 'preact';
import { NavigationLayoutProps } from './NavigationLayout.types.ts';
import { Navigation } from '~/components';

export const NavigationLayout: FunctionComponent<NavigationLayoutProps> = ({
	children,
	shopUrl,
}) => {
	return (
		<>
			<Navigation shopUrl={shopUrl} />
			<main>{children}</main>
		</>
	);
};
