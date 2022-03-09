import {faker} from "@faker-js/faker";
export class Stock {
    symbol: string;
    price: number;
    marketCap: number;
    issuedShares:number;
    constructor() {
        this.symbol = faker.finance.currencySymbol();
        this.price = parseFloat(faker.finance.amount());
        this.issuedShares = faker.random.number(1000);
        this.marketCap = this.issuedShares * this.price
    }
}