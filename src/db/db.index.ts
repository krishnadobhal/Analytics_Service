import { createClient } from '@clickhouse/client'
import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config();

export const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

const client = createClient({
    url: process.env.CLICKHOUSE_URL || '',
    username: process.env.CLICKHOUSE_USER || '',
    password: process.env.CLICKHOUSE_PASSWORD || '',
    max_open_connections: 10,
})

export default client;