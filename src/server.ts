import { Server } from '@/config';
import { MySQL } from '@/config';
import { AppRoutes } from './routes';
import { environmentVariables } from '@/config';

const connectToDatabase = async () => {
	const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = environmentVariables;
	try {
		await MySQL.connect({
			host: DB_HOST,
			port: DB_PORT,
			username: DB_USER,
			password: DB_PASSWORD,
			database: DB_DATABASE,
		});
	} catch (error) {
		console.error(error);
	}
};

const runServer = async () => {
	try {
		const server = new Server({
			port: 8000,
			routes: AppRoutes.routes,
		});

		await server.execute();
	} catch (error) {
		console.error(error);
	}
};

const main = async () => {
	console.clear();

	await connectToDatabase();

	runServer();
};

main();
