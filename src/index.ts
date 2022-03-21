import express from 'express';
import {router} from './js/routes/authenticate';
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.json())

function hello() {

}

app.use(router);


app.listen(3000, () => {
    console.log('listening to port 3000');
});

