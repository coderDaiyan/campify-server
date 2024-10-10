"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = require("../../../utils/sendResponse");
const categories_service_1 = require("./categories.service");
const categories_validation_1 = require("./categories.validation");
const createCategory = async (req, res) => {
    try {
        const categoryData = req.body;
        const { error, data } = categories_validation_1.catregoryValidationSchema.safeParse(categoryData);
        if (!error) {
            const newCategoryData = await categories_service_1.categoryService.createCategoryIntoDB(data);
            (0, sendResponse_1.sendResponse)(res, {
                status: http_status_1.default.OK,
                message: "Product retrieved successfully",
                data: newCategoryData,
            });
        }
        else {
            res.status(http_status_1.default.BAD_REQUEST).json({
                status: http_status_1.default.BAD_REQUEST,
                message: "Category is not validated successfully",
                error,
            });
        }
    }
    catch (err) {
        res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({
            status: http_status_1.default.INTERNAL_SERVER_ERROR,
            message: err.message,
            stack: err.stack,
        });
    }
};
const getAllCategories = async (req, res) => {
    try {
        const categories = await categories_service_1.categoryService.getAllCategoriesFromDB();
        (0, sendResponse_1.sendResponse)(res, {
            status: http_status_1.default.OK,
            message: "Categories retrieved successfully",
            data: categories,
        });
    }
    catch (err) {
        res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({
            status: http_status_1.default.INTERNAL_SERVER_ERROR,
            message: err.message,
            stack: err.stack,
        });
    }
};
exports.categoryController = { createCategory, getAllCategories };
