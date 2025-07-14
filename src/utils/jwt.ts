import jwt, { SignOptions } from 'jsonwebtoken';

const SECRET = 'your_jwt_secret';

export const generateToken = (payload: object, options?: SignOptions) => {
    return jwt.sign(payload, SECRET, options);
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, SECRET);
};