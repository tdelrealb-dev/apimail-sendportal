import express, { Router } from 'express';
import swaggerUI from 'swagger-ui-express';
import cors from 'cors';
import { ServerOptions } from '@/types';

class Server {
	public readonly app = express();
	private readonly port: number;
	private readonly routes: Router;

	constructor({ port, routes }: ServerOptions) {
		this.port = port;
		this.routes = routes;
	}

	async execute() {
		this.app.set('port', this.port);

		this.app.use(express.json());
		this.app.use(cors());

		this.app.use(this.routes);

		this.app.listen(this.app.get('port'), () => {
			console.log(`Server running on port ${this.app.get('port')}`);
		});
	}
}

export { Server };
