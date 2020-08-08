"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class PurchasesService {
    createPurchases(purchase_params, callback) {
        const _session = new schema_1.default(purchase_params);
        _session.save(callback);
    }
}
exports.default = PurchasesService;
