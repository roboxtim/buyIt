"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const environment_1 = require("../environment");
const user_routes_1 = require("../routes/user_routes");
const purchases_routes_1 = require("../routes/purchases_routes");
const app_1 = require("../routes/app");
class App {
    constructor() {
        this.mongoUrl = 'mongodb://localhost/' + environment_1.default.getDBName();
        this.user_routes = new user_routes_1.UserRoutes();
        this.purchases_routes = new purchases_routes_1.PurchasesRoutes();
        this.app_route = new app_1.AppRoute();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.app_route.route(this.app);
        this.user_routes.route(this.app);
        this.purchases_routes.route(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            autoIndex: true,
            keepAlive: true,
            useFindAndModify: false
        });
    }
}
exports.default = new App().app;
