"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import index from '../index';
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
chai_1.default.use(chai_http_1.default);
let index = require('../index');
let should = chai_1.default.should();
describe('/POST product', () => {
    it('it should not POST a book without pages field', (done) => {
        let product = {
            name: "The Lord of the Rings",
            price: 100,
            quantity: 1954
        };
        chai_1.default.request(index)
            .post('/products/create')
            .send(product)
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('errors');
            res.body.errors.should.have.property('pages');
            res.body.errors.pages.should.have.property('kind').eql('required');
            done();
        });
    });
});
//# sourceMappingURL=app.test.js.map