import { Router } from "express";
import { productController } from "./products.controller";

const productRouter = Router();

productRouter.get("/", productController.getAllProducts);
productRouter.get("/:id", productController.getSingleProduct);
productRouter.post("/", productController.createProduct);
productRouter.delete("/:id", productController.deleteProduct);
productRouter.patch("/:id", productController.editProduct);

export default productRouter;
