"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchasesController = void 0;
const service_1 = require("../modules/purchases/service");
class PurchasesController {
    constructor() {
        this.purchases_service = new service_1.default();
    }
    createPurchases(req, res) {
    }
}
exports.PurchasesController = PurchasesController;
