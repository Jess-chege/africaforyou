/* istanbul ignore file */
import express from 'express';
import { appConfig } from './config';
import Logger from './config/logger';

const app = express();
global.logger = Logger.createLogger({ label: 'AFRICAFORYOU' });

app.use(express.json());
app.use(routes);

app.use((err, req, res, next) => {
    err.statusCode = er.statusCode ||500;
    err.message = err.message || "server error";
    res.status(err.statusCode).json({
        message: err.message,
    });
});
appConfig(app);

export default app;