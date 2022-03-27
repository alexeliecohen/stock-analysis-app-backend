"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./js/routes/product.route");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(product_route_1.router);
app.listen(3000, () => {
    console.log('listening to port 3000');
});
module.exports = app; // for testing
//# sourceMappingURL=index.js.map