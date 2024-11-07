"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const mainError_1 = require("./error/mainError");
const enum_1 = require("./utils/enum");
const handleError_1 = require("./error/handleError");
const router_1 = __importDefault(require("./router/router"));
const mainApp = (app) => {
    try {
        app.use("/api", router_1.default);
        app.all("*", (req, res, next) => {
            next(new mainError_1.mainError({
                name: `Route Error`,
                message: `Route Error: because the page, ${req.originalUrl} doesn't exist`,
                status: enum_1.HTTP.BAD_REQUEST,
                success: false,
            }));
        });
        app.use(handleError_1.handleError);
    }
    catch (error) {
        console.log(error);
    }
};
exports.mainApp = mainApp;
