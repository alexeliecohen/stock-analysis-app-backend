export declare class Product {
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
