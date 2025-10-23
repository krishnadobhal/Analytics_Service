import { pool } from "../db/db.index.js";
import type { User } from "../types/types.js";

export async function GetUserByEmail(email: string): Promise<User> {
    const client = await pool.connect();
    try {
        const res = await client.query("SELECT * FROM users WHERE email = $1", [email]);
        return res.rows[0] as User;
    } catch (err) {
        console.error("Error fetching user by email:", err);
        throw err;
    } finally {
        client.release();
    }
}
