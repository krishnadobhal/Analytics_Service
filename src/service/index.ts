import { GetAllDataByEmail } from "../repository/Analysis.js";
import { GetUserByEmail } from "../repository/user.js";
import type { User } from "../types/types.js";
import { DecodeToken } from "./jwt.js";

export async function GetDataByEmail(token: string) {
    const decodedToken = DecodeToken(token)
    // console.log(decodedToken);
    const userData: User = await GetUserByEmail(decodedToken.sub);
    const data = await GetAllDataByEmail(userData.username);
    return data;
}
