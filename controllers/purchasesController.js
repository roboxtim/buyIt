"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchasesController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/purchases/service");
const ObjectId = require('mongodb').ObjectId;
class PurchasesController {
    constructor() {
        this.purchases_service = new service_2.default();
    }
    createPurchases(req, res) {
        if (req.body.name) {
            const purchases_params = {
                name: req.body.name,
                user_id: req['user'].id,
                modification_notes: [{
                        modified_on: new Date(Date.now()),
                        modified_by: null,
                        modification_note: 'New purchases created'
                    }]
            };
            this.purchases_service.createPurchases(purchases_params, (err, purchase_data) => {
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
    getPurchases(req, res) {
        if (req['user']) {
            this.purchases_service.getPurchases({
                user_id: req['user'].id
            }, (err, purchase_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('Get purchases', purchase_data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
    updatePurchases(req, res) {
        if (req['user'] &&
            req['body']['id'] &&
            req['body']['name']) {
            this.purchases_service.updatePurchases({
                _id: req['body']['id'],
                user_id: req['user'].id
            }, {
                name: req['body']['name']
            }, (err, purchase_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('Update purchases', purchase_data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
    deletePurchases(req, res) {
        if (req['user'] &&
            req['body']['id']) {
            console.log({
                _id: req['body']['id'],
                user_id: req['user'].id,
            });
            this.purchases_service.deletePurchases({
                _id: req['body']['id'],
                user_id: req['user'].id,
            }, (err, purchase_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('Delete purchases', purchase_data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
}
exports.PurchasesController = PurchasesController;
