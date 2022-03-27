"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const Product_1 = require("../model/Product");
let productList = [];
class ProductService {
    constructor() {
    }
    async create(product) {
        const newProduct = new Product_1.Product(product.body);
        productList.push(newProduct);
        return Promise.resolve(newProduct);
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map