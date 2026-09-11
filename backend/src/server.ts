import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';

import { router } from "./routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Middleware de upload com limite de 50MB
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }
}));

app.use(router);

// Serve as imagens salvas na pasta tmp
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }

    return res.status(500).json({
        status: 'Error',
        msg: 'Internal server error!'
    });
});

app.listen(3333, () => {
    console.log('Servidor on-line');
});