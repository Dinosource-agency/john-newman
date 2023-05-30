export type BioProps = {
	img: string;
	about: {
		img: {
			_id: string;
			url: string;
		}[];
		bio: {
			style: string;
			_key: string;
			markDefs: never[];
			children: {
				marks: never[];
				text: string;
				_key: string;
				_type: string;
			}[];
			_type: string;
		}[];
	};
};
