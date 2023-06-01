import { homeService } from '~/services';
import { useState, useEffect } from 'preact/hooks';

export const useHomePage = () => {
	const [data, setData] = useState({
		shopUrl: '',
		socials: {
			facebook: '',
			instagram: '',
			twitter: '',
			tiktok: '',
		},
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	const fetchData = async () => {
		try {
			const data = await homeService.getHomePage();
			setData(data);
		} catch (error) {
			setError(error as string);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData().then((r) => r);
	}, []);

	return { data, loading, error };
};
