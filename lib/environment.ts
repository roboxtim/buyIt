enum Environments {
    local_environment = 'local',
    prod_environment = 'prod',
}

class Environment {
    private accessToken : String;
    private environment: String;

    constructor(environment: String) {
        this.environment = environment;

        this.accessToken = 'J!69gYKp!4q)8L0RHFG0Ef(y';
    }

    getPort(): Number {
        if (this.environment === Environments.prod_environment) {
            return 8081;
        } else {
            return 4848;
        }
    }

    getDBName(): String {
        if (this.environment === Environments.prod_environment) {
            return 'buyit';
        } else {
            return 'buyit';
        }
    }
}

export default new Environment(Environments.local_environment);