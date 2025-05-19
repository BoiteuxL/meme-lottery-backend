"use strict";

import express, {Express, NextFunction, Request, Response} from 'express';
import * as MemeController from "./controllers/MemeController";
import {HttpCodes} from "@loics-utils/http-codes";

const app: Express = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction): any => {
    console.log(`[${new Date().toISOString()}] (${req.method}) ${req.originalUrl}`);
    return next();
});

app.use("/gif-meme", MemeController.getSingleGifMeme);
app.use("/image-meme", MemeController.getSingleImageMeme);
app.use("/video-meme", MemeController.getSingleVideoMeme);

app.use((req: Request, res: Response, next: NextFunction): any => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Access-Control-Allow-Origin");

    if (req.method === "OPTIONS") {
        res.status(HttpCodes.SUCCESS_OK).end();
        return;
    }
    else{
        next();
        return;
    }
});

// Gestion des erreurs
app.use((err: Error, req: Request, res: Response): void => {
    res.status(HttpCodes.SERVER_ERR_INTERNAL).json({data: null, error: err});
    return;
});

export default app;