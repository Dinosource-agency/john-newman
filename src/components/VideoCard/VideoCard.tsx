import { FunctionComponent } from 'preact';
import { VideoCardProps } from './VideoCard.types';
import { YouTubeEmbed } from 'react-social-media-embed';
import { Heading } from '~/components';

export const VideoCard: FunctionComponent<VideoCardProps> = ({
	className,
	videoUrl,
	title,
	description,
}) => {
	return (
		<div className={className}>
			<YouTubeEmbed url={videoUrl} width={100 + '%'} height={338} />
			<Heading
				className="p-video-card__title"
				headingType="h4"
				headingStyle="h5"
			>
				{title}
			</Heading>
			<p className="p-video-card__description">{description}</p>
		</div>
	);
};
