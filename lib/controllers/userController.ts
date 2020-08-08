import {Request, Response} from 'express';
import {insufficientParameters, mongoError, successResponse, failureResponse} from '../modules/common/service';
import {IUser} from '../modules/users/model';
import UserService from '../modules/users/service';

const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const accessTokenSecret = 'rD7hEa^)SF6bGTAa*P@0#ljQ';

export class UserController {

    private user_service: UserService = new UserService();

    public static authenticateJWT = (req, res, next) => {
        const authHeader = req.headers.authorization;

        if (authHeader) {
            const token = authHeader.split(' ')[1];

            jwt.verify(token, accessTokenSecret, (err, user) => {

                if (err) {
                    return res.sendStatus(403);
                }

                req.user = user;
                next();
            });
        } else {
            res.sendStatus(401);
        }
    };

    public createUser(req: Request, res: Response) {
        if (req.body.name &&
            req.body.email &&
            req.body.password) {

            const password = UserController.setPassword(req.body.password);
            const user_params: IUser = {
                name: req.body.name,
                email: req.body.email,
                salt: password.salt,
                hash: password.hash,
                modification_notes: [{
                    modified_on: new Date(Date.now()),
                    modified_by: null,
                    modification_note: 'New user created'
                }]
            };
            this.user_service.createUser(user_params, (err: any, user_data: IUser) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('User created', UserController.generateJWT(user_data.email, user_data._id), res);
                }
            });
        } else {
            // error response if some fields are missing in request body
            insufficientParameters(res);
        }
    }

    public loginUser(req: Request, res: Response) {
        if (req.body.email &&
            req.body.password) {

            const user_filter = {email: req.body.email};
            /*Find user*/
            this.user_service.filterUser(user_filter, (err: any, user_data: IUser) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    if(!UserController.validatePassword(req.body.password, user_data.hash, user_data.salt)) {
                        failureResponse('Wrong Password', 'Liar', res);
                    } else {
                        successResponse('User logged in', UserController.generateJWT(user_data.email, user_data._id), res);
                    }
                }
            });

        } else {
            // error response if some fields are missing in request body
            insufficientParameters(res);
        }
    }

    public static setPassword(password) {
        let salt = crypto.randomBytes(16).toString('hex');
        let hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex');

        return {
            salt: salt,
            hash: hash
        }
    }

    public static validatePassword(password, userHash, userSalt) {
        const hash = crypto.pbkdf2Sync(password, userSalt, 10000, 512, 'sha512').toString('hex');
        return userHash === hash;
    }

    public static generateJWT(email, _id) {
        const today = new Date();
        let expirationDate = new Date(today);
        expirationDate.setDate(today.getDate() + 3600);
        const exp = expirationDate.getTime() / 1000;

        return jwt.sign({
            email: email,
            id: _id,
            exp: exp,
        }, accessTokenSecret);

    }

}