import { Request, Response, NextFunction } from 'express';
import { loginUser, refreshAccessToken } from '../services/auth.service';
import { successResponse } from '../utils/response';

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const tokens = await loginUser(email, password);
        successResponse(res, 'Login successful', tokens);
    } catch (err) {
        next(err);
    }
};

export const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { refreshToken } = req.body;
        const accessToken = await refreshAccessToken(refreshToken);
        successResponse(res, 'Token refreshed successfully', { accessToken });
    } catch (err) {
        next(err);
    }
};