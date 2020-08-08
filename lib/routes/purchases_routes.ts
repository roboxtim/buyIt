
import { Application, Request, Response } from 'express';
import { PurchasesController } from '../controllers/purchasesController';
import {authenticateJWT} from '../modules/common/service';

export class PurchasesRoutes{

    private user_controller: PurchasesController = new PurchasesController();

    public route(app: Application) {

        app.post('/purchases', authenticateJWT, (req: Request, res: Response) => {
            this.user_controller.createPurchases(req, res);
        });

    }
}