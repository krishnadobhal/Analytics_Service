import { redisclient } from "../db/redis.js";
import { GetAllDataByEmail } from "../repository/Analysis.js";
import { GetUserByEmail } from "../repository/user.js";
import type { User } from "../types/types.js";
import { DecodeToken } from "./jwt.js";

export async function GetDataByEmail(token: string) {
    const decodedToken = DecodeToken(token)
    // console.log(decodedToken);
    const userData: User = await GetUserByEmail(decodedToken.sub);
    const cachedUser = await redisclient.get("user");
    // If user data is found in cache, return it
    if (cachedUser) {
        return JSON.parse(cachedUser);
    }
    const data = await GetAllDataByEmail(userData.username);
    // Cache the data in Redis for 1 hour
    await redisclient.set("user", JSON.stringify(data), { EX: Math.floor(Date.now() / 1000) + 3600 });
    return data;
}
