
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import { ServerAppModule } from './app/server-app.module';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { enableProdMode } from '@angular/core';
enableProdMode();

const app = express();
const port = process.env.PORT || 8000;
const baseUrl = `http://localhost:${port}`;
const path = require('path');

app.engine('html', ngExpressEngine({
    bootstrap: ServerAppModule
}));

app.set('view engine', 'html');
app.set('views', 'dist');

app.use('/', express.static('dist', {index: false}));

const routes = [
    '/',
    '/contact'
];

routes.forEach(route => {
    app.get(route, (req, res) => {
        console.time(`GET: ${req.originalUrl}`);
        res.render('./index', {
            req: req,
            res: res
        });
        console.timeEnd(`GET: ${req.originalUrl}`);
    });
});

app.listen(port,() => {
    console.log(`Listening at ${baseUrl}`);
});
