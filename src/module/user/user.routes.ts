import { defineRoutes } from '@gaman/core/routes';
import userService from './user.service';

interface Deps {
	userService: ReturnType<typeof userService>;
}

export default defineRoutes(({ userService }: Deps) => ({
	'/': () => {
		return userService.getMessage();
	},
}));
