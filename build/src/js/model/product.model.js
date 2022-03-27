"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
class ProductModel {
    constructor(body) {
        this.id = ++ProductModel.incr;
        this.name = body.name;
        this.price = body.price;
        this.quantity = body.quantity;
    }
}
exports.ProductModel = ProductModel;
ProductModel.incr = 0;
//# sourceMappingURL=product.model.js.map