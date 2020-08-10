import env from '../../environment';
import { Response } from 'express';
import { response_status_codes } from './model';
const jwt = require('jsonwebtoken');

export function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, env['accessToken'], (err, user) => {

            if (err) {
                res.sendStatus(401);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

export function successResponse(message: string, DATA: any, res: Response) {
    res.status(response_status_codes.success).json({
        STATUS: 'SUCCESS',
        MESSAGE: message,
        DATA
    });
}

export function failureResponse(message: string, DATA: any, res: Response) {
    res.status(response_status_codes.success).json({
        STATUS: 'FAILURE',
        MESSAGE: message,
        DATA
    });
}

export function insufficientParameters(res: Response) {
    res.status(response_status_codes.bad_request).json({
        STATUS: 'FAILURE',
        MESSAGE: 'Insufficient parameters',
        DATA: {}
    });
}

export function mongoError(err: any, res: Response) {
    res.status(response_status_codes.internal_server_error).json({
        STATUS: 'FAILURE',
        MESSAGE: 'MongoDB error',
        DATA: err
    });
}