export declare class ProductModel {
    static incr: number;
    id: number;
    name: string;
    price: number;
    quantity: number;
    constructor(body: {
        name: string;
        price: number;
        quantity: number;
    });
}
