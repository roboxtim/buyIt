"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Environments;
(function (Environments) {
    Environments["local_environment"] = "local";
    Environments["prod_environment"] = "prod";
})(Environments || (Environments = {}));
class Environment {
    constructor(environment) {
        this.environment = environment;
        this.accessToken = 'J!69gYKp!4q)8L0RHFG0Ef(y';
    }
    getPort() {
        if (this.environment === Environments.prod_environment) {
            return 8081;
        }
        else {
            return 4848;
        }
    }
    getDBName() {
        if (this.environment === Environments.prod_environment) {
            return 'buyit';
        }
        else {
            return 'buyit';
        }
    }
}
exports.default = new Environment(Environments.local_environment);
