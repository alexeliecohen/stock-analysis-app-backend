import {User} from "./User";
import {Stock} from "./Stock";
import AlphaVantage from "alphavantage-ts";
import fetch from 'cross-fetch';

const user = new User();
console.log(user);

enum Request {
    GET='GET',
    POST='POST',
    PUT='PUT',
    DELeTE='DELETE',
}
/*
const alpha = new AlphaVantage("86DTSOSZXCZV6XPY");

alpha.stocks.quote("msft", {datatype: "json"}).then(data => {
    console.log(data);
});


const url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=demo';

const response = fetch(url,
        {
            method: Request.GET,
            headers: {'User-Agent': 'request'},
        });

response
    .then(value => {console.log(value.json())})


*/

