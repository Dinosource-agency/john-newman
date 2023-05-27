import { FunctionComponent } from 'preact';
import { Image } from '~/components/Image';
import { MusicLinkProps } from './MusicLink.types';

export const MusicLink: FunctionComponent<MusicLinkProps> = ({
	className,
	link,
	linkText,
	src,
}) => {
	const altText = `${linkText} icon`;
	return (
		<a className={className} href={link}>
			<Image className="a-music-icon" src={src} alt={altText} />
			{linkText}
		</a>
	);
};
