"use strict";
exports.__esModule = true;
var User_1 = require("./User");
var alphavantage_ts_1 = require("alphavantage-ts");
var cross_fetch_1 = require("cross-fetch");
var user = new User_1.User();
console.log(user);
var Request;
(function (Request) {
    Request["GET"] = "GET";
    Request["POST"] = "POST";
    Request["PUT"] = "PUT";
    Request["DELeTE"] = "DELETE";
})(Request || (Request = {}));
var alpha = new alphavantage_ts_1["default"]("86DTSOSZXCZV6XPY");
alpha.stocks.quote("msft", { datatype: "json" }).then(function (data) {
    console.log(data);
});
var url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=demo';
var response = (0, cross_fetch_1["default"])(url, {
    method: Request.GET,
    headers: { 'User-Agent': 'request' }
});
response
    .then(function (value) { console.log(value.json()); });
