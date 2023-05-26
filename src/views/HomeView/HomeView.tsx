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

			<div className="u-layout-constrain">
				<Heading headingType="h4" headingStyle="h4">
					Tour dates
				</Heading>
				<div className="p-home__tour">
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
			</div>
		</NavigationLayout>
	);
};
