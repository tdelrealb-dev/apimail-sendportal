import { MySQLOptions } from '@/types';
import { DataSource, Repository, ObjectLiteral } from 'typeorm';

class MySQL {
	public static datasource: DataSource;

	public static async connect(options: MySQLOptions): Promise<DataSource> {
		const { host, port, username, password, database } = options;

		this.datasource = new DataSource({
			type: 'mysql',
			host,
			port,
			username,
			password,
			database,
			entities: [],
			synchronize: true,
			logging: false,
		});

		try {
			this.datasource.initialize();

			console.log(`Connected to MySQL database: ${database}`);

			return this.datasource;
		} catch (error) {
			throw error;
		}
	}

	public static getRepository<Entity extends ObjectLiteral>(entity: {
		new (): Entity;
	}): Repository<Entity> {
		if (!this.datasource) {
			throw new Error("DataSource is not initialized. Call 'connect' first.");
		}
		return this.datasource.getRepository(entity);
	}
}

export { MySQL };
