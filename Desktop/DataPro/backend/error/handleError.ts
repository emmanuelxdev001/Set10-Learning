import { NextFunction, Request, Response } from "express";
import { mainError } from "./mainError";
import { HTTP } from "../utils/enum";

const errorBuilder = (err: mainError, res: Response) => {
  res.status(HTTP.BAD_REQUEST).json({
    name: err.name,
    message: err.message,
    success: err.success,
    status: err.status,
    error: err,
  });
};

export const handleError = (
  err: mainError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  errorBuilder(err, res);
};
