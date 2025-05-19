"use strict";

import { Request, Response, NextFunction } from "express";
import MemeCategories from "@/enums/MemeCategories.enum";
import Meme from "@/models/Meme.model";
import DatabaseService from "@/services/Database.service";
import {HttpCodes} from "@loics-utils/http-codes";

export async function getSingleGifMeme(req: Request, res: Response, next: NextFunction): Promise<void> {
    const category: MemeCategories = Number(req.query.category) as MemeCategories;
    try {
        const foundMeme: Meme = (await DatabaseService.collections["gifMemes"].aggregate([{$match: {category: category}}, {$sample: {size:1}}]).toArray())[0] as Meme;
        res.status(HttpCodes.SUCCESS_OK).json({data: foundMeme || null, error: null});
        return;
    } catch (err) {
        console.error(err);
        next(err);
        return;
    }
}

export async function getSingleVideoMeme(req: Request, res: Response, next: NextFunction): Promise<void> {
    const category: MemeCategories = Number(req.query.category) as MemeCategories;
    try {
        const foundMeme: Meme = (await DatabaseService.collections["videoMemes"].aggregate([{$match: {category: category}}, {$sample: {size:1}}]).toArray())[0] as Meme;
        res.status(HttpCodes.SUCCESS_OK).json({data: foundMeme || null, error: null});
        return;
    } catch (err) {
        console.error(err);
        next(err);
        return;
    }
}

export async function getSingleImageMeme(req: Request, res: Response, next: NextFunction): Promise<void> {
    const category: MemeCategories = Number(req.query.category) as MemeCategories;
    try {
        const foundMeme: Meme = (await DatabaseService.collections["imageMeme"].aggregate([{$match: {category: category}}, {$sample: {size:1}}]).toArray())[0] as Meme;
        res.status(HttpCodes.SUCCESS_OK).json({data: foundMeme || null, error: null});
        return;
    } catch (err) {
        console.error(err);
        next(err);
        return;
    }
}