"use strict";

import express, {Express, NextFunction, Request, Response} from 'express';
import MemeController from "./controllers/MemeController";
import {HttpCodes} from "@loics-utils/http-codes";

const app: Express = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction): any => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    return next();
});

app.use("/test", MemeController.getSingleMeme);

app.use((req: Request, res: Response, next: NextFunction): any => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Access-Control-Allow-Origin");

    if (req.method === "OPTIONS") {
        return res.status(HttpCodes.SUCCESS_OK).end();
    }
    else{
        return next();
    }
});


export default app;