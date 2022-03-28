import { Request} from 'express';
import Product from "../model/product.model";
import IProduct from "../interfaces/product.interface";
import mongoose from "mongoose";

interface CRUD {
    create: (product: Request) => Promise<IProduct>;
    getAll: (product: Request) => Promise<IProduct[]>

}


export class ProductService implements CRUD {

    constructor() {
    }

    async create(product: Request): Promise<IProduct> {
        let {name, price, quantity} = product.body;
        const newProduct = new Product({
            _id: new mongoose.Types.ObjectId(),
            name,
            price,
            quantity
        });
        return newProduct.save()
            .then(result => {
                return Promise.resolve(newProduct)
            });
    }

    async getAll(product: Request): Promise<IProduct[]> {
        return Product.find({});
    }
}
