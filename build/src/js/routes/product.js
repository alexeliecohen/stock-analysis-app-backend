"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductService_1 = require("../service/ProductService");
const router = (0, express_1.Router)();
const productService = new ProductService_1.ProductService();
router.post('products/create', (req, res) => {
    const { name, price, quantity } = req.body;
});
//# sourceMappingURL=product.js.map