"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.user_controller = new userController_1.UserController();
    }
    route(app) {
        app.post('/registration', (req, res) => {
            this.user_controller.createUser(req, res);
        });
        app.post('/login', (req, res) => {
            this.user_controller.loginUser(req, res);
        });
    }
}
exports.UserRoutes = UserRoutes;
