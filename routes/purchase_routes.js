"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseRoutes = void 0;
const purchaseController_1 = require("../controllers/purchaseController");
const service_1 = require("../modules/common/service");
class PurchaseRoutes {
    constructor() {
        this.purchase_controller = new purchaseController_1.PurchaseController();
    }
    route(app) {
        app.post('/purchase', service_1.authenticateJWT, (req, res) => {
            this.purchase_controller.createPurchase(req, res);
        });
        app.get('/purchase', service_1.authenticateJWT, (req, res) => {
            this.purchase_controller.getPurchase(req, res);
        });
        app.put('/purchase', service_1.authenticateJWT, (req, res) => {
            this.purchase_controller.updatePurchase(req, res);
        });
        app.delete('/purchase', service_1.authenticateJWT, (req, res) => {
            this.purchase_controller.deletePurchase(req, res);
        });
        app.put('/purchase_status', service_1.authenticateJWT, (req, res) => {
            this.purchase_controller.purchaseStatus(req, res);
        });
    }
}
exports.PurchaseRoutes = PurchaseRoutes;
