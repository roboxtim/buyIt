"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchasesRoutes = void 0;
const purchasesController_1 = require("../controllers/purchasesController");
const UserController_1 = require("../controllers/UserController");
class PurchasesRoutes {
    constructor() {
        this.user_controller = new purchasesController_1.PurchasesController();
    }
    route(app) {
        app.post('/purchases', UserController_1.UserController.authenticateJWT, (req, res) => {
            this.user_controller.createPurchases(req, res);
        });
    }
}
exports.PurchasesRoutes = PurchasesRoutes;
