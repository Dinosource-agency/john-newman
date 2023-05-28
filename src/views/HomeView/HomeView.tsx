import { FunctionComponent } from 'preact';
import { NavigationLayout } from '~/layouts';
import { Heading, TourDate, SocialIcons } from '~/components';
import { TourDateMock } from './TourDate.Mock';
import { useHomePage } from '~/hooks';

export const HomeView: FunctionComponent = () => {
	const { data } = useHomePage();

	return (
		<NavigationLayout shopUrl={data?.shopUrl}>
			<section className="p-home__header">
				<div className="p-home__header__social-icons">
					<SocialIcons
						facebook={data?.socials.facebook}
						instagram={data?.socials.instagram}
						tiktok={data?.socials.tiktok}
						twitter={data?.socials.twitter}
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
