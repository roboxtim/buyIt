"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class UserService {
    createUser(user_params, callback) {
        const _session = new schema_1.default(user_params);
        _session.save(callback);
    }
    filterUser(query, callback) {
        return schema_1.default.findOne(query, callback);
    }
}
exports.default = UserService;
