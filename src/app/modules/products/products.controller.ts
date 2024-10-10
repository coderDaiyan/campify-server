import { Request, Response } from "express";
import httpStatus from "http-status";
import { sendResponse } from "../../../utils/sendResponse";
import { productService } from "./products.service";
import { productValidationSchema } from "./products.validation";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProductsFromDB();
    sendResponse(res, {
      status: httpStatus.OK,
      message: "Products retrieved successfully",
      data: products,
    });
  } catch (err: Error | any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message,
      stack: err.stack,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await productService.getSingleProductFromDB(id);
    sendResponse(res, {
      status: httpStatus.OK,
      message: "Product retrieved successfully",
      data: product,
    });
  } catch (err: Error | any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message,
      stack: err.stack,
    });
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const { error, data } = productValidationSchema.safeParse(productData);
    if (!error) {
      const newProductData = await productService.createProductIntoDB(data);
      sendResponse(res, {
        status: httpStatus.CREATED,
        message: "Product added successfully",
        data: newProductData,
      });
    } else {
      res.status(httpStatus.BAD_REQUEST).json({
        status: httpStatus.BAD_REQUEST,
        message: "Product is not validated successfully",
        error,
      });
    }
  } catch (err: Error | any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message,
      stack: err.stack,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await productService.deleteProductFromDB(id);
    sendResponse(res, {
      status: httpStatus.OK,
      message: "Product deleted successfully",
      data: product,
    });
  } catch (err: Error | any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message,
      stack: err.stack,
    });
  }
};

const editProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    const product = await productService.editProductFromDB(id, productData);
    sendResponse(res, {
      status: httpStatus.OK,
      message: "Product edited successfully",
      data: product,
    });
  } catch (err: Error | any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message,
      stack: err.stack,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  editProduct,
};
