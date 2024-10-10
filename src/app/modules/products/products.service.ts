import Product from "./products.model";

const getAllProductsFromDB = async () => {
  const res = await Product.find({}).populate("category", "-_id -image");
  return res;
};

const getSingleProductFromDB = async (id: string) => {
  const res = await Product.find({ _id: id }).populate(
    "category",
    "-_id -image",
  );
  return res;
};

const createProductIntoDB = async (data: any) => {
  const res = await Product.create(data);
  return res;
};

const deleteProductFromDB = async (id: string) => {
  const res = await Product.deleteOne({ _id: id });
  return res;
};

const editProductFromDB = async (id: string, data: any) => {
  const res = await Product.findOneAndUpdate({ _id: id }, data, { new: true });
  return res;
};

export const productService = {
  getAllProductsFromDB,
  getSingleProductFromDB,
  createProductIntoDB,
  deleteProductFromDB,
  editProductFromDB,
};
