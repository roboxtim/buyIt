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
        status: 'SUCCESS',
        message: message,
        data : DATA
    });
}

export function failureResponse(message: string, DATA: any, res: Response) {
    res.status(response_status_codes.bad_request).json({
        status: 'FAILURE',
        message: message,
        data : DATA
    });
}

export function insufficientParameters(res: Response) {
    res.status(response_status_codes.success).json({
        status: 'FAILURE',
        message: 'Insufficient parameters',
        data : {}
    });
}

export function mongoError(err: any, res: Response) {
    res.status(response_status_codes.internal_server_error).json({
        status: 'FAILURE',
        message: 'MongoDB error',
        data: err
    });
}