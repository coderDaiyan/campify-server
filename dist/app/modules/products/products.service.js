"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const products_model_1 = __importDefault(require("./products.model"));
const getAllProductsFromDB = async () => {
    const res = await products_model_1.default.find({}).populate("category", "-_id -image");
    return res;
};
const getSingleProductFromDB = async (id) => {
    const res = await products_model_1.default.find({ _id: id }).populate("category", "-_id -image");
    return res;
};
const createProductIntoDB = async (data) => {
    const res = await products_model_1.default.create(data);
    return res;
};
const deleteProductFromDB = async (id) => {
    const res = await products_model_1.default.deleteOne({ _id: id });
    return res;
};
const editProductFromDB = async (id, data) => {
    const res = await products_model_1.default.findOneAndUpdate({ _id: id }, data, { new: true });
    return res;
};
exports.productService = {
    getAllProductsFromDB,
    getSingleProductFromDB,
    createProductIntoDB,
    deleteProductFromDB,
    editProductFromDB,
};
