"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_model_1 = require("../model/product.model");
let productList = [];
class ProductService {
    constructor() {
    }
    async create(product) {
        const newProduct = new product_model_1.ProductModel(product.body);
        productList.push(newProduct);
        return Promise.resolve(newProduct);
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map