"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./js/routes/product.route");
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = __importDefault(require("./js/config/config"));
const logging_1 = __importDefault(require("./js/config/logging"));
const app = (0, express_1.default)();
const NAMESPACE = 'Server';
mongoose_1.default.connect(config_1.default.mongo.url, config_1.default.mongo.options)
    .then(result => {
    logging_1.default.info(NAMESPACE, 'connected to mongodb');
})
    .catch((error) => {
    logging_1.default.error(NAMESPACE, error.message, error);
});
// mongoose.connect("mongodb://admin:password@localhost:27017")
app.use(body_parser_1.default.json());
app.use(product_route_1.router);
app.listen(3000, () => {
    console.log('listening to port 3000');
});
module.exports = app; // for testing
//# sourceMappingURL=index.js.map