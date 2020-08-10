import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import environment from "../environment";
import { UserRoutes } from "../routes/user_routes";
import { PurchasesRoutes } from "../routes/purchases_routes";

class App {

    public app: express.Application;
    public mongoUrl: string = 'mongodb://localhost/' + environment.getDBName();

    private user_routes: UserRoutes = new UserRoutes();
    private purchases_routes: PurchasesRoutes = new PurchasesRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();

        this.app.use(express.static('public/dist'));

        this.user_routes.route(this.app);
        this.purchases_routes.route(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    private mongoSetup(): void {
        mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            autoIndex: true, //this is the code I added that solved it all
            keepAlive: true,
            useFindAndModify: false
        });
    }

}

export default new App().app;