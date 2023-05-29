export interface HomePage {
	shopUrl: string;
	_updatedAt: string;
	_createdAt: string;
	_ref: string;
	_type: string;
	caption: string;
	socials: Social;
	shows?: ShowsEntity[];
	videos?: VideosEntity[];
	image: Image;
	albums?: AlbumsEntity[];
}

export interface Social {
	facebook: string;
	twitter: string;
	instagram: string;
	tiktok: string;
}

export interface ShowsEntity {
	title: string;
	date: string;
	externalUrl: string;
	location: string;
	_key: string;
}

export interface VideosEntity {
	title: string;
	url: string;
	description: string;
}
export interface Image {
	asset: Asset;
}

export interface Asset {
	_id: string;
	url: string;
}

export interface AlbumsEntity {
	spotifyUrl: string;
	appleMusicUrl: string;
	deezerUrl: string;
	image: Image;
}
