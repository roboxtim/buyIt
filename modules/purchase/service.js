"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class PurchaseService {
    createPurchase(purchase_params, callback) {
        const _session = new schema_1.default(purchase_params);
        _session.save(callback);
    }
    getPurchase(query, callback) {
        schema_1.default.find(query, callback);
    }
    updatePurchase(query, replace, callback) {
        schema_1.default.updateOne(query, replace, callback);
    }
    deletePurchase(query, callback) {
        schema_1.default.deleteOne(query, callback);
    }
}
exports.default = PurchaseService;
