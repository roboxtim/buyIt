import {Application, Request, Response} from 'express';
import {PurchasesController} from '../controllers/purchasesController';
import {authenticateJWT} from '../modules/common/service';

export class PurchasesRoutes {

    private purchase_controller: PurchasesController = new PurchasesController();

    public route(app: Application) {

        app.post('/purchases', authenticateJWT, (req: Request, res: Response) => {
            this.purchase_controller.createPurchases(req, res);
        });

        app.get('/purchases', authenticateJWT, (req: Request, res: Response) => {
            this.purchase_controller.getPurchases(req, res);
        });

        app.put('/purchases', authenticateJWT, (req: Request, res: Response) => {
            this.purchase_controller.updatePurchases(req, res);
        });

        app.delete('/purchases', authenticateJWT, (req: Request, res: Response) => {
            this.purchase_controller.deletePurchases(req, res);
        });
    }
}