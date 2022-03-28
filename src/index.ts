import express from 'express';
import {router} from './js/routes/product.route';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import config from './js/config/config';
import logging from "./js/config/logging";
import cors from "cors";

const app = express();

const NAMESPACE = 'Server';
mongoose.connect(config.mongo.url, config.mongo.options)
    .then(result => {
        logging.info(NAMESPACE, 'connected to mongodb')
    })
    .catch((error) => {
        logging.error(NAMESPACE, error.message, error);
    })
// mongoose.connect("mongodb://admin:password@localhost:27017")

app.use(bodyParser.json())
app.use(cors());

app.use(router);

const whitelist = ["http://localhost:3000"]

app.listen(3000, () => {
    console.log('listening to port 3000');
});

module.exports = app; // for testing

