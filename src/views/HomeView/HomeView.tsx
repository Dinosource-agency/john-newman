import { FunctionComponent } from 'preact';
import { NavigationLayout } from '~/layouts';
import { Heading, TourDate, SocialIcons } from '~/components';
import { TourDateMock, SocialLinksMock } from './TourDate.Mock';

export const HomeView: FunctionComponent = () => {
	return (
		<NavigationLayout>
			<section className="p-home__header">
				<div className="p-home__header__social-icons">
					<SocialIcons
						facebook={SocialLinksMock.facebook}
						instagram={SocialLinksMock.instagram}
						tiktok={SocialLinksMock.tiktok}
						twitter={SocialLinksMock.twitter}
						direction="column"
					/>
				</div>
			</section>
			<section id="live" className="u-layout-constrain">
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
			</section>
		</NavigationLayout>
	);
};
