import { FunctionComponent } from 'preact';
import { NavigationLayout } from '~/layouts';
import { Heading } from '~/components/Heading';
import { TourDate } from '~/components/TourDate';
import { TourDateMock } from './TourDate.Mock';

export const HomeView: FunctionComponent = () => {
	return (
		<NavigationLayout>
			<Heading headingType="h2" headingStyle="h2">
				Home
			</Heading>

			<h4 className="u-layout-constrain h4">Tour dates</h4>
			<div className="u-layout-grid p-home__tour__dates">
				{TourDateMock.map((tourDate, index) => (
					<TourDate
						key={index}
						tour={tourDate.tour}
						venue={tourDate.venue}
						city={tourDate.city}
						country={tourDate.country}
						link={tourDate.link}
						linkText={tourDate.linkText}
					/>
				))}
			</div>
		</NavigationLayout>
	);
};
