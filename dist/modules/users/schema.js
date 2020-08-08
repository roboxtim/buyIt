"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const model_1 = require("../common/model");
const Schema = mongoose.Schema;
const schema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    salt: String,
    hash: String,
    is_deleted: {
        type: Boolean,
        default: false
    },
    modification_notes: [model_1.ModificationNote]
});
exports.default = mongoose.model('users', schema);
