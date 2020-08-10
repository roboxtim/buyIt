
import { Application, Request, Response } from 'express';
import { UserController } from '../controllers/userController';

export class UserRoutes {

    private user_controller: UserController = new UserController();

    public route(app: Application) {

        app.post('/registration', (req: Request, res: Response) => {
            this.user_controller.createUser(req, res);
        });

        app.post('/login', (req: Request, res: Response) => {
            this.user_controller.loginUser(req, res);
        });

    }
}