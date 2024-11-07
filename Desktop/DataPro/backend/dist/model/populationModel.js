"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const popuationModel = new mongoose_1.Schema({
    population: {
        type: [],
        required: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("popuation", popuationModel);
