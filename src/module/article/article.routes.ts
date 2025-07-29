import { defineRoutes } from '@gaman/core/routes';
import articleService from './article.service';

interface Deps {
	articleService: ReturnType<typeof articleService>;
}

export default defineRoutes(({ articleService }: Deps) => ({
	'/': () => {
		return r.text(articleService.getMessage());
	},
}));
