// middlewares/rateLimiter.middleware.ts
import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 menit
    max: 100, // maksimum 100 request per 15 menit
    message: {
        status: 429,
        message: "Terlalu banyak permintaan, silakan coba lagi nanti.",
    },
    standardHeaders: true, // mengirimkan rate limit info di headers
    legacyHeaders: false, // disable headers `X-RateLimit-*`
});
