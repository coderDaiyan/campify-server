import { model, Schema } from "mongoose";
import { TCategory } from "./categories.interface";

const categorySchema = new Schema<TCategory>({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const Category = model<TCategory>("Category", categorySchema);

export default Category;
