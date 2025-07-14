import { Client } from 'pg';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export const db = new Client({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
    database: process.env.DB_NAME || 'clean_arch_db'
});

db.connect()
    .then(async () => {
        console.log('Connected to PostgreSQL');
        const initSQL = fs.readFileSync(path.join(__dirname, '../migration/init.sql')).toString();
        await db.query(initSQL);
        console.log('Migration executed');
    })
    .catch((err) => console.error('Connection error', err.stack));