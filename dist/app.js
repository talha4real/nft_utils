"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const express_1 = __importDefault(require("express"));
const Moralis = require('moralis/node');
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/buy', require('./routes/api/buy'));
// app.post('/getOwnedNfts',async(req:any,res:any)=>{
//     (async()=>{
//         try{
//             console.log(req.body);
//         }catch(e){
//             console.log(e);
//             res.send({failed: e})
//         }
//     })()
// })
const PORT = 5005;
app.listen(PORT, () => console.log("Server running"));
