import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
import { DB_HOST, DB_DROP, DB_PORT, DB_LOGGING, DB_NAME, DB_PASSWORD, DB_SYNC, DB_USER } from "./envs";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    ssl: {
        rejectUnauthorized: false,
    },
    synchronize: DB_SYNC,
    logging: DB_LOGGING,
    entities: ["dist/entities/**/*.js"],
    dropSchema: DB_DROP,
    subscribers: [],
    migrations: [],
}) 