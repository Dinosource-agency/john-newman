import { FunctionComponent } from 'preact';
import { Link } from 'preact-router';
import { Image } from '~/components';
import { AlbumProps } from './Album.types';

export const Album: FunctionComponent<AlbumProps> = ({
	src,
	alt,
	spotifyLink,
	appleMusicLink,
	deezerLink,
}) => {
	return (
		<div className="m-album-container">
			<Image src={src} alt={alt} className="m-albumcover" />

			<div className="m-album-links">
				<Link
					className="m-album-links__link"
					target="_blank"
					href={spotifyLink}
				>
					Spotify
				</Link>
				<Link
					className="m-album-links__link"
					target="_blank"
					href={appleMusicLink}
				>
					Apple Music
				</Link>
				<Link
					className="m-album-links__link"
					target="_blank"
					href={deezerLink}
				>
					Deezer
				</Link>
			</div>
		</div>
	);
};
