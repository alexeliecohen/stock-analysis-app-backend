export class Stock {
    symbol: string;
    price: number;
    // marketCap: number;
    quantity: number;

    constructor(symbol: string, price: number, quantity: number) {
        this.symbol = symbol;
        this.price = price;
        this.quantity = quantity;
    }
}