import { FunctionComponent } from 'preact';
import { NavigationLayout } from '~/layouts';
import {
	HomeViewMock,
	YoutubeEmbedMock,
	AlbumMock,
	TermsMock,
} from './HomeView.Mock.ts';
//import { useHomePage } from '~/hooks';
import { YouTubeEmbed } from 'react-social-media-embed';
import {
	Heading,
	TourDate,
	SocialIcons,
	MusicLink,
	Album,
	Footer,
	VideoCard,
} from '~/components';

export const HomeView: FunctionComponent = () => {
	//const { data } = useHomePage();
	const data = {
		socials: {
			facebook: 'https://www.facebook.com/officialjamesarthur',
			instagram: 'https://www.instagram.com/jamesarthur23/',
			tiktok: 'https://www.tiktok.com/@jamesarthur23',
			twitter: 'https://twitter.com/JamesArthur23',
		},
		shopUrl: 'https://www.jamesarthurofficial.com/',
	};

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
			<section className="u-layout-grid p-home__video">
				<div className="p-home__video__title">
					<Heading headingType="h4" headingStyle="h4">
						Show video
					</Heading>
				</div>
				<div className="p-home__video__embed--big">
					<YouTubeEmbed
						url={YoutubeEmbedMock.embedUrl}
						width={100 + '%'}
						youTubeProps={{
							iframeClassName:
								'p-home__video__embed--big__iframe',
						}}
					/>
				</div>
				{YoutubeEmbedMock.videos.map((video, index) => (
					<VideoCard
						key={index}
						videoUrl={video.thumbnail}
						title={video.title}
						description={video.description}
						className="p-home__video__embed--small"
					/>
				))}
			</section>

			<section id="music" className="u-layout-constrain">
				<div className="p-home__releases__heading">
					<Heading headingType="h4" headingStyle="h4">
						Latest releases
					</Heading>
					<div className="p-home__links">
						<MusicLink
							className="p-home__links__spotify"
							linkText="Spotify"
							link="https://open.spotify.com/artist/34v5MVKeQnIo0CWYMbbrPf?si=JVTG9ZAeS6yxcyiTFxQyKQ"
							src="icons/spotify-icon.svg"
						/>
						<MusicLink
							className="p-home__links__applemusic"
							linkText="Apple Music"
							link="https://music.apple.com/us/artist/john-newman/649230577"
							src="icons/apple-icon.svg"
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

			<section id="live" className="u-layout-constrain p-home__heading">
				<Heading headingType="h4" headingStyle="h4">
					Tour dates
				</Heading>
				<div className="p-home__tour">
					{HomeViewMock.map((tourDate, index) => (
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

			<Footer termsLink={TermsMock.termsLink} />
		</NavigationLayout>
	);
};
