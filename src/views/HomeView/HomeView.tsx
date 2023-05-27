import { FunctionComponent } from 'preact';
import { NavigationLayout } from '~/layouts';
import { Heading } from '~/components/Heading';
import { TourDate } from '~/components/TourDate';
import { TourDateMock } from './TourDate.Mock';
import { MusicLink } from '~/components/MusicLink';

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

			<div className="u-layout-constrain">
				<div className="p-home__releases--header">
					<Heading headingType="h4" headingStyle="h4">
						Latest releases
					</Heading>
					<div className="p-home__links">
						<MusicLink
							className="p-home__links__spotify"
							linkText="Spotify"
							link="https://open.spotify.com/artist/34v5MVKeQnIo0CWYMbbrPf?si=JVTG9ZAeS6yxcyiTFxQyKQ"
							src="images/spotify-icon.png"
						/>
						<MusicLink
							className="p-home__links__applemusic"
							linkText="Apple Music"
							link="https://music.apple.com/us/artist/john-newman/649230577"
							src="images/apple-icon.png"
						/>
					</div>
				</div>
				<div className="p-home__releases">
					<div className="p-home__release">
						<div className="p-home__release__cover">
							<img
								src="images/rotating_earth_animated_transparent.gif"
								alt="rotating earth"
							/>
						</div>
					</div>
				</div>
			</div>
		</NavigationLayout>
	);
};
