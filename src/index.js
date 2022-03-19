"use strict";
exports.__esModule = true;
// import {router} from './routes/authenticate';
var express_1 = require("express");
var app = (0, express_1["default"])();
// app.use(router);
app.listen(3000, function () {
    console.log('listening to port 3000');
});
