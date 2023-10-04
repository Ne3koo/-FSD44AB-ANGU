"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mocks_1 = require("./mocks");
const jsonwebtoken_1 = require("jsonwebtoken");
const router = express_1.default.Router();
// all pastries
router.get("/all", function (req, res) {
    const token = req.cookies.token;
    console.log('Cookies: ', req.cookies);
    if (!token)
        return res.status(401).end();
    try {
        (0, jsonwebtoken_1.verify)(token, "secret");
        res.json(mocks_1.PASTRIES);
    }
    catch (e) {
        return res.status(401).end();
    }
    return res.status(401).end();
});
// id pastries
router.get("/pastrie/:id", function (req, res) {
    const id = req.params.id;
    const pastrie = mocks_1.PASTRIES.find(p => p.id == id);
    if (pastrie)
        res.json(pastrie);
});
router.get('/login', (req, res, next) => {
    const { username, password } = { username: "alan@alan.fr", password: "123" };
    if (username !== "alan@alan.fr" && password !== "123")
        res.status(401).end();
    const token = (0, jsonwebtoken_1.sign)({ username }, 'secret');
    res.cookie("token", token);
    res.end();
});
router.get('*', function (req, res) {
    res.status(404).json({ error: "Not found" });
});
exports.default = router;
