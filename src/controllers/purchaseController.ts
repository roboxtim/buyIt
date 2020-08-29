import {Request, Response} from 'express';
import {insufficientParameters, mongoError, successResponse, failureResponse} from '../modules/common/service';
import {IPurchase} from '../modules/purchase/model';
import PurchaseService from '../modules/purchase/service';
import PurchasesService from '../modules/purchases/service';

const ObjectId = require('mongodb').ObjectId;

export class PurchaseController {

    private purchase_service: PurchaseService = new PurchaseService();
    private purchases_service: PurchasesService = new PurchasesService();

    public checkList(list_id, user_id, res: Response) {

        this.purchases_service.checkPurchase({
            _id: list_id,
            user_id: user_id
        }, (err: any) => {
            if (err) {
                mongoError(err, res);
            }
        });

    }

    public createPurchase(req: Request, res: Response) {

        if (req.body.name &&
            req['user'].id &&
            req.body.list_id) {

            this.checkList(req.body.list_id, req['user'].id, res);

            const purchases_params: IPurchase = {
                name: req.body.name,
                list_id: req.body.list_id,
                created_at: new Date(Date.now()),
            };

            this.purchase_service.createPurchase(purchases_params, (err: any, purchase_data: IPurchase) => {
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

    public getPurchase(req: Request, res: Response) {
        if (req['user'] &&
            req['body'].list_id) {

            this.checkList(req.body.list_id, req['user'].id, res);

            this.purchase_service.getPurchase({
                list_id: req['body'].list_id
            }, (err: any, purchase_data: IPurchase) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('Get list purchases', purchase_data, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

    public updatePurchase(req: Request, res: Response) {
        if (req['user'] &&
            req['body']['id'] &&
            req['body']['list_id'] &&
            req['body']['name']) {

            this.checkList(req['body']['list_id'], req['user'].id, res);

            this.purchase_service.updatePurchase(
                {
                    _id : req['body'].id,
                    list_id: req['body'].list_id
                },
                {
                    name: req['body']['name']
                },
                (err: any, purchase_data: IPurchase) => {
                    if (err) {
                        mongoError(err, res);
                    } else {
                        successResponse('Update purchase', purchase_data, res);
                    }
                });
        } else {
            insufficientParameters(res);
        }
    }

    public deletePurchase(req: Request, res: Response) {
        if (req['user'] &&
            req['body']['list_id'] &&
            req['body']['id']) {

            this.checkList(req['body']['list_id'], req['user'].id, res);

            this.purchase_service.deletePurchase(
                {
                    _id: req['body']['id'],
                    list_id: req['body'].list_id,
                },
                (err: any, purchase_data: IPurchase) => {
                    if (err) {
                        mongoError(err, res);
                    } else {
                        successResponse('Delete purchase', purchase_data, res);
                    }
                });
        } else {
            insufficientParameters(res);
        }
    }


}