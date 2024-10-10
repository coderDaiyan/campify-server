import { Router } from "express";
import { categoryController } from "./categories.controller";
const categoryRouter = Router();

categoryRouter.get("/", categoryController.getAllCategories);
categoryRouter.post("/", categoryController.createCategory);

export default categoryRouter;
