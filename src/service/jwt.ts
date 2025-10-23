import jwt, { type JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET
    ? Buffer.from(process.env.JWT_SECRET, 'base64').toString('utf-8')
    : 'default_secret_key';

export function verifyToken(token: string): any {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if (typeof decoded !== 'object' || decoded === null) {
            throw new Error('Invalid token');
        }

        const exp = (decoded as JwtPayload).exp;
        if (typeof exp === 'number' && exp * 1000 < Date.now()) {
            throw new Error('Token has expired');
        }

        return decoded;
    } catch (err) {
        throw new Error('Invalid token');
    }
}

export function DecodeToken(token: string): any {
    try {
        if (!token || !token.startsWith('Bearer ')) {
            throw new Error('Authorization header missing or invalid');
        }
        const token1 = token.split(' ')[1];
        if (!token1) {
            throw new Error('Token missing');
        }
        console.log('Decoding token:', token1);
        const decoded = jwt.verify(token1, JWT_SECRET);
        return decoded;
    } catch (err) {
        throw new Error('Invalid token');
    }
}
