import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import { Image } from '~/components/Image';
import { AlbumProps } from './Album.types';

export const Album: FunctionComponent<AlbumProps> = ({
	src,
	alt,
	spotifyLink,
	appleMusicLink,
	breezerLink,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	return (
		<div
			className={`m-album-container ${isHovered ? 'hovered' : ''}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Image src={src} alt={alt} className="m-albumcover" />
			{isHovered && (
				<div className="m-album-links">
					<a href={spotifyLink}>Spotify</a>
					<a href={appleMusicLink}>Apple Music</a>
					<a href={breezerLink}>Deezer</a>
				</div>
			)}
		</div>
	);
};
