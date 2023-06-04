import { client } from '~/services';
import { HomePage } from './home.service.types';
import { homePageQuery } from './home.service.queries.ts';

export class HomeService {
	public async getHomePage(): Promise<HomePage> {
		return await client.fetch(homePageQuery).then((res) => res);
	}
}

export const homeService = new HomeService();
