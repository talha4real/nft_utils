"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const router = express.Router();
// @route       GET api/auth
// @desc        Login Route
// @access      public
class Greeter {
    constructor(otherName) {
        this.name = "world";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
}
router.post('/', [], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
// @route       GET api/auth
// @desc        auth Route
// @access      public
router.get('/', [], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // metadata();
        const g = new Greeter("talha");
        res.send(g.name);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}));
module.exports = router;
