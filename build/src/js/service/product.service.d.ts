import { ProductModel } from "../model/product.model";
import { Request } from 'express';
interface CRUD {
    create: (product: Request) => Promise<ProductModel>;
}
export declare class ProductService implements CRUD {
    constructor();
    create(product: Request): Promise<ProductModel>;
}
export {};
