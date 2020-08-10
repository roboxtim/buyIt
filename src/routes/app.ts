import {Application} from 'express';

export class AppRoute {

    public route(app: Application) {

        app.get('/*', (req, res) => {
            res.sendFile('public/dist/index.html', { root : './'});
        });

    }
}