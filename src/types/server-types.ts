import { Router } from 'express';

interface ServerOptions {
	port: number;
	routes: Router;
}

export { ServerOptions };
