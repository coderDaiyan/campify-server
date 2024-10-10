import { Router } from "express";
import categoryRouter from "../modules/categories/categories.route";
import productRouter from "../modules/products/products.route";

const router = Router();

const routesPath = [
  {
    path: "/products",
    route: productRouter,
  },
  {
    path: "/categories",
    route: categoryRouter,
  },
];

routesPath.map(({ path, route }) => router.use(path, route));

export default router;
