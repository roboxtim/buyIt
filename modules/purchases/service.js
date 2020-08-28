"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class PurchasesService {
    createPurchases(purchase_params, callback) {
        const _session = new schema_1.default(purchase_params);
        _session.save(callback);
    }
    getPurchases(query, callback) {
        schema_1.default.find(query, callback);
    }
    updatePurchases(query, replace, note, callback) {
        schema_1.default.update(query, { $push: note });
        schema_1.default.updateOne(query, replace, callback);
    }
    deletePurchases(query, callback) {
        schema_1.default.deleteOne(query, callback);
    }
}
exports.default = PurchasesService;
