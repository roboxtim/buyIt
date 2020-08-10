"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoute = void 0;
class AppRoute {
    route(app) {
        app.get('/*', (req, res) => {
            res.sendFile('public/dist/index.html', { root: './' });
        });
    }
}
exports.AppRoute = AppRoute;
