"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(body) {
        this.id = ++Product.incr;
        this.name = body.name;
        this.price = body.price;
        this.quantity = body.quantity;
    }
}
exports.Product = Product;
Product.incr = 0;
//# sourceMappingURL=ProductModel.js.map