import client from "../db/db.index.js"

export async function GetAllData() {
    const resultSet = await client.query({
        query: 'SELECT * FROM analytics',
        format: 'JSONEachRow',
    })
    const dataset = await resultSet.json()
    return dataset
}