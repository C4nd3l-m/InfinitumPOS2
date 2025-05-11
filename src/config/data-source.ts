import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
import { DB_HOST, DB_DROP, DB_PORT, DB_LOGGING, DB_NAME, DB_PASSWORD, DB_SYNC, DB_USER } from "./envs";
import { Credential } from "../entities/Credentials.entity";
import { Product } from "../entities/Products.entity";
import { Sale } from "../entities/Sale.entity";
import { User } from "../entities/User.entity";
import { SaleDetail } from "../entities/SaleDetail.entity";

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
    entities: [Credential, Product, Sale, User, SaleDetail],
    

    dropSchema: DB_DROP,
    subscribers: [],
    migrations: [],
}) 
console.log("Entidades cargadas:", AppDataSource.options.entities);
