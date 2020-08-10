"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchasesRoutes = void 0;
const purchasesController_1 = require("../controllers/purchasesController");
const service_1 = require("../modules/common/service");
class PurchasesRoutes {
    constructor() {
        this.purchase_controller = new purchasesController_1.PurchasesController();
    }
    route(app) {
        app.post('/purchases', service_1.authenticateJWT, (req, res) => {
            this.purchase_controller.createPurchases(req, res);
        });
        app.get('/purchases', service_1.authenticateJWT, (req, res) => {
            this.purchase_controller.getPurchases(req, res);
        });
        app.put('/purchases', service_1.authenticateJWT, (req, res) => {
            this.purchase_controller.updatePurchases(req, res);
        });
        app.delete('/purchases', service_1.authenticateJWT, (req, res) => {
            this.purchase_controller.deletePurchases(req, res);
        });
    }
}
exports.PurchasesRoutes = PurchasesRoutes;
