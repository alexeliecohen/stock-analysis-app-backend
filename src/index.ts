import express from 'express';
import {router} from './js/routes/product.route';
import bodyParser from 'body-parser'


const app = express();

app.use(bodyParser.json())

app.use(router);

app.listen(3000, () => {
    console.log('listening to port 3000');
});

module.exports = app; // for testing

