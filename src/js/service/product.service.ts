import {UserModel} from "../model/user.model";
import {ProductModel} from "../model/product.model";
import { Request} from 'express';

interface CRUD {
    create: (product: Request) => Promise<ProductModel>;

}
let productList: Array<ProductModel> = []


export class ProductService implements CRUD {

    constructor() {
    }

    async create(product: Request): Promise<ProductModel> {
        const newProduct:ProductModel = new ProductModel(product.body);
        productList.push(newProduct);
        return Promise.resolve(newProduct);
    }
}
