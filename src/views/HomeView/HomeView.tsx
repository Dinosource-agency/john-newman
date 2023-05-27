import { FunctionComponent } from 'preact';
import { NavigationLayout } from '~/layouts';
import { Heading, TourDate, SocialIcons, MusicLink, Album } from '~/components';
import { TourDateMock, SocialLinksMock } from './TourDate.Mock';
import { AlbumMock } from './Album.Mock';

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

			<section id="music" className="u-layout-constrain">
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

				<div className="p-home__releases__covers">
					{AlbumMock.map((album, index) => (
						<Album
							key={index}
							src={album.cover}
							alt={album.alt}
							spotifyLink={album.spotify}
							appleMusicLink={album.appleMusic}
							breezerLink={album.breezer}
						/>
					))}
				</div>
			</section>

			<section id="live" className="u-layout-constrain p-home--header">
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
