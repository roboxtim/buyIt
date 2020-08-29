"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/purchase/service");
const service_3 = require("../modules/purchases/service");
const ObjectId = require('mongodb').ObjectId;
class PurchaseController {
    constructor() {
        this.purchase_service = new service_2.default();
        this.purchases_service = new service_3.default();
    }
    checkList(list_id, user_id, res) {
        this.purchases_service.checkPurchase({
            _id: list_id,
            user_id: user_id
        }, (err) => {
            if (err) {
                service_1.mongoError(err, res);
            }
        });
    }
    createPurchase(req, res) {
        if (req.body.name &&
            req['user'].id &&
            req.body.list_id) {
            this.checkList(req.body.list_id, req['user'].id, res);
            const purchases_params = {
                name: req.body.name,
                list_id: req.body.list_id,
                created_at: new Date(Date.now()),
            };
            this.purchase_service.createPurchase(purchases_params, (err, purchase_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('Purchase created', purchase_data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
    getPurchase(req, res) {
        if (req['user'] &&
            req['body'].list_id) {
            this.checkList(req.body.list_id, req['user'].id, res);
            this.purchase_service.getPurchase({
                list_id: req['body'].list_id
            }, (err, purchase_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('Get list purchases', purchase_data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
    updatePurchase(req, res) {
        if (req['user'] &&
            req['body']['id'] &&
            req['body']['list_id'] &&
            req['body']['name']) {
            this.checkList(req['body']['list_id'], req['user'].id, res);
            this.purchase_service.updatePurchase({
                _id: req['body'].id,
                list_id: req['body'].list_id
            }, {
                name: req['body']['name']
            }, (err, purchase_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('Update purchase', purchase_data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
    deletePurchase(req, res) {
        if (req['user'] &&
            req['body']['list_id'] &&
            req['body']['id']) {
            this.checkList(req['body']['list_id'], req['user'].id, res);
            this.purchase_service.deletePurchase({
                _id: req['body']['id'],
                list_id: req['body'].list_id,
            }, (err, purchase_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('Delete purchase', purchase_data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
}
exports.PurchaseController = PurchaseController;
