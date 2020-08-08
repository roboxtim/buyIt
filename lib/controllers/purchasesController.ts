import {Request, Response} from 'express';
import {insufficientParameters, mongoError, successResponse, failureResponse} from '../modules/common/service';
import {IPurchases} from '../modules/purchases/model';
import PurchasesService from '../modules/purchases/service';

export class PurchasesController {

    private purchases_service: PurchasesService = new PurchasesService();

    public createPurchases(req: Request, res: Response) {

    }

}