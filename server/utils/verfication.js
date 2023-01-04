import * as jwt from 'jsonwebtoken';
import createError from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, 'You are not Authenticated'));
    }
    jwt.verify(token, process.env.JWT_SECRETKEY, (err, user) => {
        if (err) {
            return next(createError(403, 'Token is not valid'));
        }
        req.user = user;
        next();
    });
};
export const verifyuser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id != req.params.uid) {
            return next(createError(403, 'You are not authorized'));
        }
    });
};
