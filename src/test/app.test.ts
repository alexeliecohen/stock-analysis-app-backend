import request from 'request';
// import index from '../index';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

let index = require('../index');
let should = chai.should();
describe('/POST product', () => {
    it('it should not POST a book without pages field', (done) => {
        let product = {
            name: "The Lord of the Rings",
            price: 100,
            quantity: 1954
        }
        chai.request(index)
            .post('/products/create')
            .send(product)
            .end((err:any, res:any) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('pages');
                res.body.errors.pages.should.have.property('kind').eql('required');
                done();
            });
    });

});