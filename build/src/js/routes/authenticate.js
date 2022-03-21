"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.status(200).send();
});
router.post('/register', (req, res) => {
    const { email, firstname, lastName, password } = req.body;
});
//# sourceMappingURL=authenticate.js.map