import dotenv from 'dotenv';
import { get } from 'env-var';

dotenv.config();

const environmentVariables = {
	APP_PORT: get('APP_PORT').required().asPortNumber(),
	DB_HOST: get('MYSQL_CREDENTIALS_HOST').required().asString(),
	DB_PORT: get('MYSQL_CREDENTIALS_PORT').required().asPortNumber(),
	DB_USER: get('MYSQL_CREDENTIALS_USER').required().asString(),
	DB_PASSWORD: get('MYSQL_CREDENTIALS_PASSWORD').required().asString(),
	DB_DATABASE: get('MYSQL_CREDENTIALS_DATABASE').required().asString(),
};

export { environmentVariables };
