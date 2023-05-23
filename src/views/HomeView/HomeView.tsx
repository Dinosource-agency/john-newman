import { FunctionComponent } from 'preact';
import { NavigationLayout } from '~/layouts/NavigationLayout/NavigationLayout.tsx';
import { Heading } from '~/components/Heading';

export const HomeView: FunctionComponent = () => {
	return (
		<NavigationLayout>
			<Heading headingType="h2" headingStyle="h2">
				Home
			</Heading>
		</NavigationLayout>
	);
};
