import { FunctionComponent } from 'preact';
import { NavigationLayout } from '~/layouts';
import { PortableText } from '@portabletext/react';
import { useHomePage } from '~/hooks';
import { YouTubeEmbed } from 'react-social-media-embed';
import {
	Heading,
	TourDate,
	SocialIcons,
	MusicLink,
	Album,
	Footer,
	VideoCard,
	Image,
} from '~/components';

export const HomeView: FunctionComponent = () => {
	const { data } = useHomePage();

	return (
		<NavigationLayout shopUrl={data?.shopUrl}>
			<section
				className="p-home__header"
				style={{ backgroundImage: `url(${data?.image.asset.url})` }}
			>
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
			<section id="video" className="u-layout-grid p-home__video">
				<div className="p-home__video__title">
					<Heading headingType="h4" headingStyle="h4">
						{data.videoTitle}
					</Heading>
				</div>
				{data.bigVideos ? (
					<div className="p-home__video__embed--big">
						<YouTubeEmbed
							url={data.bigVideos}
							width={100 + '%'}
							youTubeProps={{
								iframeClassName:
									'p-home__video__embed--big__iframe',
							}}
						/>
					</div>
				) : null}
				{data &&
					data.smallVideos &&
					data.smallVideos.length > 0 &&
					data?.smallVideos.map((video, index) => (
						<VideoCard
							key={index}
							videoUrl={video.url}
							title={video.title}
							description={video.description}
							className="p-home__video__embed--small"
						/>
					))}
			</section>

			{data.caption ? (
				<section className="u-layout-constrain p-home__caption">
					<Heading
						className="p-home__caption__text"
						headingType="h2"
						headingStyle="h3"
					>
						{data?.caption}
					</Heading>
				</section>
			) : null}

			{data.albums ? (
				<section id="music" className="u-layout-constrain">
					<div className="p-home__releases__heading">
						<Heading headingType="h4" headingStyle="h4">
							{data.albumsTitle}
						</Heading>
						<div className="p-home__links">
							<MusicLink
								className="p-home__links__spotify"
								linkText="Spotify"
								link={data.spotifyUrl}
								src="icons/spotify-icon.svg"
							/>
							<MusicLink
								className="p-home__links__applemusic"
								linkText="Apple Music"
								link={data.appleMusicUrl}
								src="icons/apple-icon.svg"
							/>
						</div>
					</div>

					<div className="p-home__releases__covers">
						{data.albums.map((album, index) => (
							<Album
								key={index}
								src={album.image.asset.url}
								alt={album.imageDescription}
								spotifyLink={album.spotifyUrl}
								appleMusicLink={album.appleMusicUrl}
								deezerLink={album.deezerUrl}
							/>
						))}
					</div>
				</section>
			) : null}

			{data.shows ? (
				<section id="tour" className="u-layout-constrain p-home__tour-dates">
					<Heading headingType="h4" headingStyle="h4">
						Tour dates
					</Heading>
					<div className="p-home__tour">
						{data.shows.map((tourDate) => (
							<TourDate
								key={tourDate._key}
								tour={tourDate.title}
								venue={tourDate.venue}
								city={tourDate.city}
								country={tourDate.country}
								link={tourDate.externalUrl}
								linkText="TICKETS & INFO"
							/>
						))}
					</div>
				</section>
			) : null}

			{data.about ? (
				<section id="about" className="u-layout-grid p-home__bio">
					<Image
						src={data.about.image.asset.url}
						alt="John Newman"
						className="p-home__bio__image"
					/>
					<div className="p-home__bio__about">
						<Heading headingType="h5" headingStyle="h5">
							{data.about.title}
						</Heading>
						<div className="p-home__bio__about__paragraph">
							<PortableText value={data.about.bio} />
						</div>
					</div>
				</section>
			) : null}
			<Footer
				facebookLink={data.socials.facebook}
				instagramLink={data.socials.instagram}
				twitterLink={data.socials.twitter}
				tiktokLink={data.socials.tiktok}
				termsLink={data.terms}
			/>
		</NavigationLayout>
	);
};
