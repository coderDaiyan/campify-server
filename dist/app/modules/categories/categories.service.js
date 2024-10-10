"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryService = void 0;
const categories_model_1 = __importDefault(require("./categories.model"));
const createCategoryIntoDB = async (categoryData) => {
    const newCategoryData = await categories_model_1.default.create(categoryData);
    return newCategoryData;
};
const getAllCategoriesFromDB = async () => {
    const res = await categories_model_1.default.find({});
    return res;
};
exports.categoryService = { createCategoryIntoDB, getAllCategoriesFromDB };
