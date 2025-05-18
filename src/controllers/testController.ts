import {Request, Response, NextFunction} from "express";
import TestDefaultRequest from "../routes/test/requests/test-default-request";
import TestDefaultResponse from "../routes/test/response/test-default-response";

export const testFunc =  async (req: Request, res: Response, next: NextFunction): Promise<unknown> => {
    const request: TestDefaultRequest;

    const response =
    return res.status(200).json({})
}