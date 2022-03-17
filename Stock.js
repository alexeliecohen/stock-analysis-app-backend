"use strict";
exports.__esModule = true;
exports.Stock = void 0;
var faker_1 = require("@faker-js/faker");
var Stock = /** @class */ (function () {
    function Stock() {
        this.symbol = faker_1.faker.finance.currencySymbol();
        this.price = parseFloat(faker_1.faker.finance.amount());
        this.issuedShares = faker_1.faker.random.number(1000);
        this.marketCap = this.issuedShares * this.price;
    }
    return Stock;
}());
exports.Stock = Stock;
