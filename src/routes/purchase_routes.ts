import {Application, Request, Response} from 'express';
import {PurchaseController} from '../controllers/purchaseController';
import {authenticateJWT} from '../modules/common/service';

export class PurchaseRoutes {

    private purchase_controller: PurchaseController = new PurchaseController();

    public route(app: Application) {

        app.post('/purchase', authenticateJWT, (req: Request, res: Response) => {
            this.purchase_controller.createPurchase(req, res);
        });

        app.get('/purchase', authenticateJWT, (req: Request, res: Response) => {
            this.purchase_controller.getPurchase(req, res);
        });

        app.put('/purchase', authenticateJWT, (req: Request, res: Response) => {
            this.purchase_controller.updatePurchase(req, res);
        });

        app.delete('/purchase', authenticateJWT, (req: Request, res: Response) => {
            this.purchase_controller.deletePurchase(req, res);
        });

        app.put('/purchase_status', authenticateJWT, (req: Request, res: Response) => {
            this.purchase_controller.purchaseStatus(req, res);
        });
    }
}