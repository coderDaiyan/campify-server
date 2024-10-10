"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catregoryValidationSchema = void 0;
const zod_1 = require("zod");
exports.catregoryValidationSchema = zod_1.z
    .object({
    name: zod_1.z.string(),
    image: zod_1.z.string(),
})
    .required();
