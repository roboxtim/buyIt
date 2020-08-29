"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    name: String,
    list_id: String,
    created_at: Date,
});
exports.default = mongoose.model('list_purchase', schema);
