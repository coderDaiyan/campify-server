import mongoose, { model, Schema } from "mongoose";
import { TProduct } from "./products.interface";

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stockQuantity: { type: Number, required: true, min: 0 },
  description: { type: String, required: true },
  category: { type: mongoose.Types.ObjectId, ref: "Category", required: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  images: { type: [String], required: true },
});

const Product = model<TProduct>("Product", productSchema);

export default Product;
