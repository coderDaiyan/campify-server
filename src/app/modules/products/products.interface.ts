import { ObjectId } from "mongoose";

export type TProduct = {
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  category: ObjectId;
  ratings: number;
  images: string[];
};
