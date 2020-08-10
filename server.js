"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app_1 = require("./config/app");
const environment_1 = require("./environment");
const PORT = environment_1.default.getPort();
app_1.default.listen(PORT, () => {
    require('dotenv').config();
    console.log('Express server listening on port ' + PORT);
    app_1.default.use(express.static('public/dist'));
});
