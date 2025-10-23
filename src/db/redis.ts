import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const redisUrl = process.env.REDIS_URL ?? "redis://localhost:6379";
const redisPassword = process.env.REDIS_PASSWORD ?? "";
const redisPort = process.env.REDIS_PORT ?? 6379;

export const redisclient = createClient({
    username: 'default',
    password: redisPassword,
    socket: {
        host: redisUrl,
        port: redisPort as number
    }
});
redisclient.on("connect", () => console.log(" Connected to Redis"));
redisclient.on("error", (err) => console.error("Redis Client Error:", err));

await redisclient.connect();
