import { FunctionComponent } from 'preact';
import { NavigationLayout } from '~/layouts';
import { Heading, TourDate, SocialIcons, VideoCard } from '~/components';
import { HomeViewMock, YoutubeEmbedMock } from './HomeView.Mock.ts';
//import { useHomePage } from '~/hooks';
import { YouTubeEmbed } from 'react-social-media-embed';

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
			<section id="live" className="u-layout-constrain">
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
		</NavigationLayout>
	);
};
