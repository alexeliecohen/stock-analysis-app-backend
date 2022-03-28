"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_model_1 = __importDefault(require("../model/product.model"));
const mongoose_1 = __importDefault(require("mongoose"));
class ProductService {
    constructor() {
    }
    async create(product) {
        let { name, price, quantity } = product.body;
        const newProduct = new product_model_1.default({
            _id: new mongoose_1.default.Types.ObjectId(),
            name,
            price,
            quantity
        });
        return newProduct.save()
            .then(result => {
            return Promise.resolve(newProduct);
        });
    }
    async getAll(product) {
        return product_model_1.default.find({});
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map