import { Request } from 'express';
import IProduct from "../interfaces/product.interface";
interface CRUD {
    create: (product: Request) => Promise<IProduct>;
}
export declare class ProductService implements CRUD {
    constructor();
    create(product: Request): Promise<IProduct>;
}
export {};
