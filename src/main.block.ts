import articleBlock from './module/article/article.block.ts';
import userBlock from './module/user/user.block.ts';
import { defineBlock } from '@gaman/core/block';
import mainRoutes from './main.routes';
import mainService from './main.service';
import authMiddleware from 'middleware/auth.middleware.ts';

export default defineBlock({
	blocks: [userBlock, articleBlock],
	path: '/',
	includes: [authMiddleware],
	routes: [mainRoutes],
	services: {
		mainService: mainService,
	},
});
