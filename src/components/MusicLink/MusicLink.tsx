import { FunctionComponent } from 'preact';
import { Image } from '~/components';
import { MusicLinkProps } from './MusicLink.types';
import { Link } from 'preact-router';

export const MusicLink: FunctionComponent<MusicLinkProps> = ({
	className,
	link,
	linkText,
	src,
}) => {
	return (
		<Link target="_blank" className={className} href={link}>
			<Image
				className="a-music-icon"
				src={src}
				alt={`${linkText} icon`}
			/>
			{linkText}
		</Link>
	);
};
