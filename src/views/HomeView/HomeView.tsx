import { FunctionComponent } from 'preact';
import { NavigationLayout } from '~/layouts';
import { Image } from '~/components/Image/Image';
import { Heading, TourDate, SocialIcons, Bio } from '~/components';
import { TourDateMock, SocialLinksMock, BioMock } from './TourDate.Mock';

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
			<section id="live" className="u-layout-bio u-layout-constrain">
				<Image
					src={BioMock.about.img[0].url}
					alt="John Newman"
					className="a-bio a-bio__image"
				/>
				<div class="a-bio">
					<h5 class="a-bio__h5">Something about me</h5>
					<p class="a-bio__p">
						John Newman is a multi-faceted DJ, singer, songwriter,
						and producer creating music on his terms. 2012 smash hit
						‘Feel The Love’ in collaboration with Rudimental first
						put the British upcoming artist on a trajectory to
						stardom, going straight in at #1 in the Official UK
						Charts. One year later, Newman affirmed himself as one
						of the fasted growing mainstream artists by releasing
						his debut solo single, ‘Love Me Again,’ taken from his
						debut album 'Tribute.' The single became an instant UK
						#1, charting in the Top 10 in over 30 countries and
						amassing over 1.6 billion worldwide streams.
					</p>
				</div>
			</section>
		</NavigationLayout>
	); /*<Bio about={BioMock.about.bio} />*/
};
