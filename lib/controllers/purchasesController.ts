import {Request, Response} from 'express';
import {insufficientParameters, mongoError, successResponse, failureResponse} from '../modules/common/service';
import {IPurchases} from '../modules/purchases/model';
import PurchasesService from '../modules/purchases/service';
import {IUser} from "../modules/users/model";

export class PurchasesController {

    private purchases_service: PurchasesService = new PurchasesService();

    public createPurchases(req: Request, res: Response) {
        if (req.body.name) {

            const purchases_params: IPurchases = {
                name: req.body.name,
                user_id: req['user'].id,
                modification_notes: [{
                    modified_on: new Date(Date.now()),
                    modified_by: null,
                    modification_note: 'New purchases created'
                }]
            };

            console.log(purchases_params);

            this.purchases_service.createPurchases(purchases_params, (err: any, purchase_data: IPurchases) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('Purchase created', purchase_data, res);
                }
            });

        } else {
            insufficientParameters(res);
        }
    }

}