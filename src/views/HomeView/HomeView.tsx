import { FunctionComponent } from 'preact';
import { NavigationLayout } from '~/layouts';
import { Heading } from '~/components/Heading';

export const HomeView: FunctionComponent = () => {
	return (
		<NavigationLayout>
			<Heading headingType="h2" headingStyle="h2">
				Home
			</Heading>

			<section className="u-layout-grid">
				<h2>Home</h2>
			</section>
		</NavigationLayout>
	);
};
