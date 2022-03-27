import { Product } from "../model/Product";
import { Request } from 'express';
interface CRUD {
    create: (product: Request) => Promise<Product>;
}
export declare class ProductService implements CRUD {
    constructor();
    create(product: Request): Promise<Product>;
}
export {};
