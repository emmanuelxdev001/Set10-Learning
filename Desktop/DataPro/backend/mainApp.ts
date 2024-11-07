import { Application, Request, Response, NextFunction } from "express";
import { mainError } from "./error/mainError";
import { HTTP } from "./utils/enum";
import { handleError } from "./error/handleError";
import file from "./router/router";


export const mainApp = (app: Application) => {
  try {
    app.use("/api", file);
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new mainError({
          name: `Route Error`,
          message: `Route Error: because the page, ${req.originalUrl} doesn't exist`,
          status: HTTP.BAD_REQUEST,
          success: false,
        })
      );
    });
    app.use(handleError);
  } catch (error) {
    console.log(error);
  }
};
