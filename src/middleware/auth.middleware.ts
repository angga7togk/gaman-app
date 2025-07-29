import { defineMiddleware } from '@gaman/core/middleware';

export default defineMiddleware((ctx) => {
	const token = ctx.header('Authorization').split('Bearer ')[1];
	// todo your middleware
	return next();
});
