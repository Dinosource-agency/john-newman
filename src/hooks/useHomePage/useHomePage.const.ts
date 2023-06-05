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
		image: {
			asset: {
				url: '',
				_id: '',
			},
		},
		bio: [],
	},
	bigVideos: '',
	smallVideos: [
		{
			url: '',
			title: '',
			description: '',
		},
	],
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
