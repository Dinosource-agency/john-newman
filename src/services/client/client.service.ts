import { createClient } from '@sanity/client';
export const client = createClient({
	projectId: '4eidten9',
	dataset: 'production',
	useCdn: false,
	apiVersion: '2021-03-25',
});
