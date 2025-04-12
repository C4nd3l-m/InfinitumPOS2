import "dotenv/config";
import { EntitySchema } from "typeorm";

function getEnvVariable(name: string): string {
    const value = process.env[name];
    if (!value) {
      throw new Error(`Falta la variable de entorno ${name}`);
    }
    return value;
  }

export const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
export const DB_TYPE: string = process.env.DB_TYPE ? process.env.DB_TYPE : "postgres"
export const DB_HOST: string = getEnvVariable('DB_HOST') 
export const DB_PORT: number = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432;
export const DB_USER: string = getEnvVariable('DB_USER')
export const DB_PASSWORD: string  | undefined = process.env.DB_PASSWORD
export const DB_NAME: string = getEnvVariable('DB_NAME');
export const DB_SYNC: boolean = process.env.DB_SYNC ? process.env.DB_SYNC === "true" : true
export const DB_LOGGING: boolean = process.env.DB_LOGGING ? process.env.DB_LOGGING === "true" : true
export const DB_ENTITIES: string | undefined | EntitySchema = process.env.DB_ENTITIES
export const DB_DROP: boolean = process.env.DB_DROP ? process.env.DB_DROP === "false" : false