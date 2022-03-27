"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const ProductService_1 = require("../service/ProductService");
const router = (0, express_1.Router)();
exports.router = router;
const productService = new ProductService_1.ProductService();
router.post('/products/create', async (req, res) => {
    // console.log(req.body)
    const result = await productService.create(req);
    res.status(201).send(result);
});
//# sourceMappingURL=ProductRoute.js.map