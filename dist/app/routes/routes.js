"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_route_1 = __importDefault(require("../modules/categories/categories.route"));
const products_route_1 = __importDefault(require("../modules/products/products.route"));
const router = (0, express_1.Router)();
const routesPath = [
    {
        path: "/products",
        route: products_route_1.default,
    },
    {
        path: "/categories",
        route: categories_route_1.default,
    },
];
routesPath.map(({ path, route }) => router.use(path, route));
exports.default = router;
