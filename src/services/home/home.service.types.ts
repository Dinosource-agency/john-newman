interface ImageAsset {
	url: string;
	_id: string;
}

interface Socials {
	facebook: string;
	instagram: string;
	twitter: string;
	tiktok: string;
}

interface About {
	image: {
		asset: ImageAsset;
	};
	bio: [];
}

interface SmallVideo {
	url: string;
	title: string;
	description: string;
}

interface Show {
	city: string;
	externalUrl: string;
	_key: string;
	title: string;
	country: string;
	venue: string;
}

interface Album {
	appleMusicUrl: string;
	deezerUrl: string;
	imageDescription: string;
	image: {
		asset: {
			url: string;
		};
	};
	spotifyUrl: string;
}

export interface HomePage {
	shopUrl: string;
	caption: string;
	socials: Socials;
	image: {
		asset: ImageAsset;
	};
	about: About;
	bigVideos: string;
	smallVideos: SmallVideo[];
	shows: Show[];
	albums: Album[];
	spotifyUrl: string;
	appleMusicUrl: string;
	terms: string;
}
