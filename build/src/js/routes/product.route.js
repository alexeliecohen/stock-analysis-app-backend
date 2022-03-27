"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_service_1 = require("../service/product.service");
const router = (0, express_1.Router)();
exports.router = router;
const productService = new product_service_1.ProductService();
router.post('/products/create', async (req, res) => {
    // console.log(req.body)
    const result = await productService.create(req);
    res.status(201).send(result);
});
//# sourceMappingURL=product.route.js.map