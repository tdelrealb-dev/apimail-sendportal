import { Router } from 'express';

class AppRoutes {
	static get routes(): Router {
		const router = Router();

		const routesPrefix = '/api/v1';

		router.post('/set-group', () => {});

		router.get('/get-groups', () => {});

		router.post('/set-users', () => {});

		return router;
	}
}

export { AppRoutes };
