"use strict";
import MemeTiers from "../enums/MemeTiers.enum";
import MemeCategories from "../enums/MemeCategories.enum";
import {ObjectId} from "mongodb";

export default class Meme {
    public _id?: ObjectId;
    public name: string;
    public fileURL: string;
    public tier: MemeTiers;
    public category: MemeCategories;

    constructor(name: string, fileURL: string, tier: MemeTiers, category: MemeCategories, id?: ObjectId) {
        this._id = id;
        this.name = name;
        this.fileURL = fileURL;
        this.tier = tier;
        this.category = category;
    }
}