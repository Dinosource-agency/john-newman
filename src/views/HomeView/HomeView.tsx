import { FunctionComponent } from 'preact';
import { useMemo } from 'preact/hooks';
import { NavigationLayout } from '~/layouts';
import { Image } from '~/components/Image/Image';
import { Heading, TourDate, SocialIcons, Bio } from '~/components';
import { TourDateMock, SocialLinksMock, BioMock } from './TourDate.Mock';
import { PortableText } from '@portabletext/react';

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
			<section id="live" className="u-layout-grid">
				<Image
					src={BioMock.about.img[0].url}
					alt="John Newman"
					className="a-bio a-bio__image"
				/>
				<div class="a-bio__about">
					<Heading headingType="h5" headingStyle="h5">
						Something about me
					</Heading>
					<div className="a-bio__about__paragraph">
						<PortableText value={BioMock.about.bio} />
					</div>
				</div>
			</section>
		</NavigationLayout>
	);
};
