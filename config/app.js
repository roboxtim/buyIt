"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const environment_1 = require("../environment");
const user_routes_1 = require("../routes/user_routes");
const purchases_routes_1 = require("../routes/purchases_routes");
const path = require('path');
class App {
    constructor() {
        this.mongoUrl = 'mongodb://localhost/' + environment_1.default.getDBName();
        this.user_routes = new user_routes_1.UserRoutes();
        this.purchases_routes = new purchases_routes_1.PurchasesRoutes();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.app.use(express.static(path.join(__dirname + '/../public/dist/')));
        this.app.get('/', function (req, res) {
            res.sendFile(path.join(__dirname + '/../public/dist/index.html'));
        });
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
