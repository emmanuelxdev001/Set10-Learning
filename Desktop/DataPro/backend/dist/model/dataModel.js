"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dataModel = new mongoose_1.Schema({
    economic: {
        type: [],
        required: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("data", dataModel);
