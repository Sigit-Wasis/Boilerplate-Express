import { findUserByEmail } from '../repositories/user.repository';
import { generateToken, verifyToken } from '../utils/jwt';
import { JwtPayload } from 'jsonwebtoken';

export const loginUser = async (email: string, password: string) => {
    const user = await findUserByEmail(email);
    if (!user || user.password !== password) {
        throw new Error('Invalid email or password');
    }
    const accessToken = generateToken({ id: user.id, email: user.email }, { expiresIn: '15m' });
    const refreshToken = generateToken({ id: user.id, email: user.email }, { expiresIn: '7d' });
    return { accessToken, refreshToken };
};


export const refreshAccessToken = async (refreshToken: string) => {
  try {
    const decoded = verifyToken(refreshToken) as JwtPayload;
    return generateToken({ id: decoded.id, email: decoded.email }, { expiresIn: '15m' });
  } catch {
    throw new Error('Invalid refresh token');
  }
};