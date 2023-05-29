import { FunctionComponent } from 'preact';
import { Link } from 'preact-router/match';
import { Image } from '~/components';
import { AlbumProps } from './Album.types';

export const Album: FunctionComponent<AlbumProps> = ({
	src,
	alt,
	spotifyLink,
	appleMusicLink,
	breezerLink,
}) => {
	return (
		<div className="m-album-container">
			<Image src={src} alt={alt} className="m-albumcover" />

			<div className="m-album-links">
				<Link className="m-album-links__link" href={spotifyLink}>
					Spotify
				</Link>
				<Link className="m-album-links__link" href={appleMusicLink}>
					Apple Music
				</Link>
				<Link className="m-album-links__link" href={breezerLink}>
					Deezer
				</Link>
			</div>
		</div>
	);
};
