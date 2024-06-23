import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm";

const port = process.env.DB_5432 as number | undefined

export const AppDataSource = new DataSource ({
    type: 'postgres',
    host: process.env.DB_LOCALHOST,
    port: port,
    username: process.env.DB_POSTGRES,
    password:  process.env.DB_OLA,
    database: process.env.DB_BACKEND,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`]
})