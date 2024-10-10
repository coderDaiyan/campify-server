"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = require("../../../utils/sendResponse");
const products_service_1 = require("./products.service");
const products_validation_1 = require("./products.validation");
const getAllProducts = async (req, res) => {
    try {
        const products = await products_service_1.productService.getAllProductsFromDB();
        (0, sendResponse_1.sendResponse)(res, {
            status: http_status_1.default.OK,
            message: "Products retrieved successfully",
            data: products,
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
const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await products_service_1.productService.getSingleProductFromDB(id);
        (0, sendResponse_1.sendResponse)(res, {
            status: http_status_1.default.OK,
            message: "Product retrieved successfully",
            data: product,
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
const createProduct = async (req, res) => {
    try {
        const productData = req.body;
        const { error, data } = products_validation_1.productValidationSchema.safeParse(productData);
        if (!error) {
            const newProductData = await products_service_1.productService.createProductIntoDB(data);
            (0, sendResponse_1.sendResponse)(res, {
                status: http_status_1.default.CREATED,
                message: "Product added successfully",
                data: newProductData,
            });
        }
        else {
            res.status(http_status_1.default.BAD_REQUEST).json({
                status: http_status_1.default.BAD_REQUEST,
                message: "Product is not validated successfully",
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
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await products_service_1.productService.deleteProductFromDB(id);
        (0, sendResponse_1.sendResponse)(res, {
            status: http_status_1.default.OK,
            message: "Product deleted successfully",
            data: product,
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
const editProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const productData = req.body;
        const product = await products_service_1.productService.editProductFromDB(id, productData);
        (0, sendResponse_1.sendResponse)(res, {
            status: http_status_1.default.OK,
            message: "Product edited successfully",
            data: product,
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
exports.productController = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    deleteProduct,
    editProduct,
};
