"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readPopulationData = exports.createPopulationData = exports.readMigrantData = exports.createMigrantData = exports.readEconomicData = exports.createData = void 0;
const csvtojson_1 = __importDefault(require("csvtojson"));
const dataModel_1 = __importDefault(require("../model/dataModel"));
const populationModel_1 = __importDefault(require("../model/populationModel"));
const migrantModel_1 = __importDefault(require("../model/migrantModel"));
const createData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, csvtojson_1.default)().fromFile(req.file.path);
        const mainData = yield dataModel_1.default.create({
            economic: data,
        });
        return res.status(200).json({
            message: "Done",
            data: mainData,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating",
            data: error,
        });
    }
});
exports.createData = createData;
const readEconomicData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mainData = yield dataModel_1.default.find();
        return res.status(200).json({
            message: "Done",
            data: mainData,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating",
            data: error,
        });
    }
});
exports.readEconomicData = readEconomicData;
const createMigrantData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, csvtojson_1.default)().fromFile(req.file.path);
        const mainData = yield migrantModel_1.default.create({
            migrant: data,
        });
        return res.status(200).json({
            message: "Done",
            data: mainData,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating",
            data: error,
        });
    }
});
exports.createMigrantData = createMigrantData;
const readMigrantData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mainData = yield migrantModel_1.default.find();
        return res.status(200).json({
            message: "Done",
            data: mainData,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating",
            data: error,
        });
    }
});
exports.readMigrantData = readMigrantData;
const createPopulationData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, csvtojson_1.default)().fromFile(req.file.path);
        const mainData = yield populationModel_1.default.create({
            population: data,
        });
        return res.status(200).json({
            message: "Done",
            data: mainData,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating",
            data: error,
        });
    }
});
exports.createPopulationData = createPopulationData;
const readPopulationData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mainData = yield populationModel_1.default.find();
        return res.status(200).json({
            message: "Done",
            data: mainData,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating",
            data: error,
        });
    }
});
exports.readPopulationData = readPopulationData;
