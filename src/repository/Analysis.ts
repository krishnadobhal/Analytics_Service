import client, { pool } from "../db/db.index.js"

// const pgclient = await pool.connect();

export async function GetAllData() {
    const resultSet = await client.query({
        query: 'SELECT * FROM analytics',
        format: 'JSONEachRow',
    })
    const dataset = await resultSet.json()
    return dataset
}

export async function UniqueIPs() {
    const resultSet = await client.query({
        query: 'SELECT COUNT(DISTINCT ipv4) AS unique_ips FROM analytics',
        format: 'JSONEachRow',
    })
    const dataset = await resultSet.json()
    return dataset
}

export async function GetClicks() {
    const resultSet = await client.query({
        query: `SELECT short_code,COUNT() AS total_clicks FROM analytics 
        GROUP BY short_code
        ORDER BY total_clicks DESC`,
        format: 'JSONEachRow',
    })
    const dataset = await resultSet.json()
    return dataset
}

export async function GetBrowserCount() {
    const resultSet = await client.query({
        query: `SELECT browser, count() AS total_clicks
                FROM analytics
                GROUP BY browser
                ORDER BY total_clicks DESC`,
        format: 'JSONEachRow'
    })
    const dataset = await resultSet.json()
    return dataset
}

export async function GetAllDataByEmail(email: string) {
    const resultSet = await client.query({
        query: `SELECT * FROM analytics WHERE userAgent = '${email}'`,
        format: 'JSONEachRow',
    })
    const dataset = await resultSet.json()
    return dataset
}