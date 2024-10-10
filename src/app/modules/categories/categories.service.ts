import { TCategory } from "./categories.interface";
import Category from "./categories.model";

const createCategoryIntoDB = async (categoryData: TCategory) => {
  const newCategoryData = await Category.create(categoryData);
  return newCategoryData;
};

const getAllCategoriesFromDB = async () => {
  const res = await Category.find({});
  return res;
};

export const categoryService = { createCategoryIntoDB, getAllCategoriesFromDB };
