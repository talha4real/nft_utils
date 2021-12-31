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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Moralis = require('moralis/node');
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`hello world`);
        Moralis.start({ serverUrl: "https://inuchpvr19tw.usemoralis.com:2053/server", appId: "MhvbvOiMJHtoL1iOTay1RS0wfwkfMRzzAj7kGbq8" });
        const options = { chain: 'polygon', address: '0x939A2d5A8CB10afD30b4162F4b5885A3A547c225' };
        const polygonNFTs = yield Moralis.Web3API.account.getNFTs(options);
        console.log(polygonNFTs);
    }))();
}));
app.listen(5001, () => console.log("Server running"));
