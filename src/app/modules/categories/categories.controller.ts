import { Request, Response } from "express";
import httpStatus from "http-status";
import { sendResponse } from "../../../utils/sendResponse";
import { categoryService } from "./categories.service";
import { catregoryValidationSchema } from "./categories.validation";

const createCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    const { error, data } = catregoryValidationSchema.safeParse(categoryData);
    if (!error) {
      const newCategoryData = await categoryService.createCategoryIntoDB(data);
      sendResponse(res, {
        status: httpStatus.OK,
        message: "Product retrieved successfully",
        data: newCategoryData,
      });
    } else {
      res.status(httpStatus.BAD_REQUEST).json({
        status: httpStatus.BAD_REQUEST,
        message: "Category is not validated successfully",
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

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getAllCategoriesFromDB();
    sendResponse(res, {
      status: httpStatus.OK,
      message: "Categories retrieved successfully",
      data: categories,
    });
  } catch (err: Error | any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message,
      stack: err.stack,
    });
  }
};

export const categoryController = { createCategory, getAllCategories };
