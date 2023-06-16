export const HomePageInitialState = {
	shopUrl: '',
	caption: '',
	socials: {
		facebook: '',
		instagram: '',
		twitter: '',
		tiktok: '',
	},
	image: {
		asset: {
			url: '',
			_id: '',
		},
	},
	about: {
		title: '',
		image: {
			asset: {
				url: '',
				_id: '',
			},
		},
		bio: [],
	},
	videoTitle: '',
	bigVideos: '',
	smallVideos: [
		{
			url: '',
			title: '',
			description: '',
		},
	],
	showsTitle: '',
	shows: [
		{
			city: '',
			externalUrl: '',
			_key: '',
			title: '',
			country: '',
			venue: '',
		},
	],
	albumsTitle: '',
	albums: [
		{
			appleMusicUrl: '',
			deezerUrl: '',
			imageDescription: '',
			image: {
				asset: {
					url: '',
				},
			},
			spotifyUrl: '',
		},
	],
	spotifyUrl: '',
	appleMusicUrl: '',
	terms: '',
};
