import { FunctionComponent } from 'preact';
import { VideoCardProps } from './VideoCard.types';
import { YouTubeEmbed } from 'react-social-media-embed';
import { Heading } from '~/components';

export const VideoCard: FunctionComponent<VideoCardProps> = ({
	className,
	videoUrl,
}) => {
	return (
		<div className={className}>
			<YouTubeEmbed url={videoUrl} width={100 + '%'} height={338} />
			<Heading
				className="p-video-card__title"
				headingType="h4"
				headingStyle="h5"
			>
				The video title
			</Heading>
			<p className="p-video-card__description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				ullamcorper, nisl quis tincidunt aliquam, nunc nisl
			</p>
		</div>
	);
};
