import {Request, Response} from 'express';
import {insufficientParameters, mongoError, successResponse, failureResponse} from '../modules/common/service';
import {IPurchases} from '../modules/purchases/model';
import PurchasesService from '../modules/purchases/service';

const ObjectId = require('mongodb').ObjectId;

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

    public getPurchases(req: Request, res: Response) {
        if (req['user']) {
            this.purchases_service.getPurchases({
                user_id: req['user'].id
            }, (err: any, purchase_data: IPurchases) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('Get purchases', purchase_data, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

}