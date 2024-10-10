"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidationSchema = void 0;
const zod_1 = require("zod");
exports.productValidationSchema = zod_1.z
    .object({
    name: zod_1.z.string(),
    price: zod_1.z.number(),
    stockQuantity: zod_1.z.number().min(0),
    description: zod_1.z.string(),
    category: zod_1.z.string(),
    ratings: zod_1.z.number().min(1).max(5),
    images: zod_1.z.array(zod_1.z.string()),
})
    .required();
