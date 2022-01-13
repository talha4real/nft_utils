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
const axios_1 = __importDefault(require("axios"));
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
let result = [
    {
        "token_address": "0x64f73278dd68a3c4da147bc7bf39b735169d69f4",
        "token_id": "2",
        "block_number_minted": "19097097",
        "owner_of": "0x939a2d5a8cb10afd30b4162f4b5885a3a547c225",
        "block_number": "19097097",
        "amount": "1",
        "contract_type": "ERC721",
        "name": "Trading Cards",
        "symbol": "TCARDS",
        "token_uri": "https://nfttestengine.000webhostapp.com/meta/2.json",
        "metadata": null,
        "synced_at": "2021-11-23T05:06:29.214Z",
        "is_valid": 0,
        "syncing": 2,
        "frozen": 0
    },
    {
        "token_address": "0x6e7d3a9ae8dcb77ab8d96d57b9a2a76978f0c3a4",
        "token_id": "2",
        "block_number_minted": "19096559",
        "owner_of": "0x939a2d5a8cb10afd30b4162f4b5885a3a547c225",
        "block_number": "19096559",
        "amount": "1",
        "contract_type": "ERC721",
        "name": "Trading Cards",
        "symbol": "TCARDS",
        "token_uri": "https://nfttestengine.000webhostapp.com/meta/2.json",
        "metadata": "{\"dna\":\"1011000100\",\"name\":\"Boy Brand\",\"description\":\"Very Rare trading card\",\r\n    \"image\":\"https://nfttestengine.000webhostapp.com/meta/2.png\",\r\n    \"edition\":2,\"date\":1631439360007,\r\n    \r\n        \"attributes\":[{\"trait_type\":\"Background\",\"value\":\"Red\"},\r\n    \r\n    \r\n            {\"trait_type\":\"Name\",\"value\":\"Kid Card\"},\r\n            \r\n            {\"trait_type\":\"HP\",\"value\":\"80\"},\r\n            {\"trait_type\":\"Attack\",\"value\":\"Hit with water Gun 2+\"},\r\n            {\"trait_type\":\"Attack 2\",\"value\":\"Tease 5+\"},\r\n            {\"trait_type\":\"Weakness\",\"value\":\"Everything\"},\r\n            {\"trait_type\":\"Resistance\",\"value\":\"None\"},\r\n            {\"trait_type\":\"Retreat Cost\",\"value\":\"500\"},\r\n            {\"trait_type\":\"Origin\",\"value\":\"Street Boys\"},\r\n            {\"trait_type\":\"Headwear\",\"value\":\"Cap\"}]}",
        "synced_at": "2021-11-22T23:10:58.767Z",
        "is_valid": 1,
        "syncing": 2,
        "frozen": 0
    },
    {
        "token_address": "0x6e7d3a9ae8dcb77ab8d96d57b9a2a76978f0c3a4",
        "token_id": "1",
        "block_number_minted": "19096559",
        "owner_of": "0x939a2d5a8cb10afd30b4162f4b5885a3a547c225",
        "block_number": "19096559",
        "amount": "1",
        "contract_type": "ERC721",
        "name": "Trading Cards",
        "symbol": "TCARDS",
        "token_uri": "https://nfttestengine.000webhostapp.com/meta/1.json",
        "metadata": "{\"dna\":\"0011000100\",\"name\":\"Vaperion\",\r\n    \r\n\"description\":\"Very Rare Pokemon trading card.\",\r\n\"image\":\"https://nfttestengine.000webhostapp.com/meta/1.png\",\"edition\":1,\r\n\"date\":1631439356343,\r\n\"attributes\":[{\"trait_type\":\"Background\",\"value\":\"Light blue\"},\r\n    \r\n    \r\n{\"trait_type\":\"Name\",\"value\":\"Vaperion\"},\r\n\r\n{\"trait_type\":\"HP\",\"value\":\"80\"},\r\n{\"trait_type\":\"Attack\",\"value\":\"Quick Attack 10+\"},\r\n{\"trait_type\":\"Attack 2\",\"value\":\"Water Gun 30+\"},\r\n{\"trait_type\":\"Weakness\",\"value\":\"Thunder\"},\r\n{\"trait_type\":\"Resistance\",\"value\":\"None\"},\r\n{\"trait_type\":\"Retreat Cost\",\"value\":\"20\"},\r\n{\"trait_type\":\"Origin\",\"value\":\"Evlove from EVE\"},\r\n{\"trait_type\":\"Headwear\",\"value\":\"Glass dome\"}]}",
        "synced_at": "2021-11-23T09:40:10.503Z",
        "is_valid": 1,
        "syncing": 2,
        "frozen": 0
    },
    {
        "token_address": "0x64f73278dd68a3c4da147bc7bf39b735169d69f4",
        "token_id": "1",
        "block_number_minted": "19097097",
        "owner_of": "0x939a2d5a8cb10afd30b4162f4b5885a3a547c225",
        "block_number": "19097097",
        "amount": "1",
        "contract_type": "ERC721",
        "name": "Trading Cards",
        "symbol": "TCARDS",
        "token_uri": "https://nfttestengine.000webhostapp.com/meta/1.json",
        "metadata": "{\"dna\":\"0011000100\",\"name\":\"Vaperion\",\r\n    \r\n\"description\":\"Very Rare Pokemon trading card.\",\r\n\"image\":\"https://nfttestengine.000webhostapp.com/meta/1.png\",\"edition\":1,\r\n\"date\":1631439356343,\r\n\"attributes\":[{\"trait_type\":\"Background\",\"value\":\"Light blue\"},\r\n    \r\n    \r\n{\"trait_type\":\"Name\",\"value\":\"Vaperion\"},\r\n\r\n{\"trait_type\":\"HP\",\"value\":\"80\"},\r\n{\"trait_type\":\"Attack\",\"value\":\"Quick Attack 10+\"},\r\n{\"trait_type\":\"Attack 2\",\"value\":\"Water Gun 30+\"},\r\n{\"trait_type\":\"Weakness\",\"value\":\"Thunder\"},\r\n{\"trait_type\":\"Resistance\",\"value\":\"None\"},\r\n{\"trait_type\":\"Retreat Cost\",\"value\":\"20\"},\r\n{\"trait_type\":\"Origin\",\"value\":\"Evlove from EVE\"},\r\n{\"trait_type\":\"Headwear\",\"value\":\"Glass dome\"}]}",
        "synced_at": "2021-11-23T02:05:55.606Z",
        "is_valid": 1,
        "syncing": 2,
        "frozen": 0
    },
    {
        "token_address": "0x7e8b2677a3e303b163ca87c5330dfa0af6867237",
        "token_id": "1",
        "block_number_minted": "20949391",
        "owner_of": "0x939a2d5a8cb10afd30b4162f4b5885a3a547c225",
        "block_number": "20949391",
        "amount": "1",
        "contract_type": "ERC721",
        "name": "Rich Kids of NFTs",
        "symbol": "RKON",
        "token_uri": "https://richkidsofnft.com/RKON_Cards_Compleate/1.json",
        "metadata": null,
        "synced_at": "2021-11-23T20:23:23.927Z",
        "is_valid": 0,
        "syncing": 2,
        "frozen": 0
    }
];
// (async()=>{
//         await result.forEach(async(nft)=>{
//             try{
//                     await axios.get(nft.token_uri).then(res=>{
//                         // console.log(res)
//                         nft.metadata = res.data;
//                 })
//                 }catch(e){
//                     console.log("failed");
//                     nft.metadata ="not found";
//                 }
//         })
//         console.log(result);
// })()
app.post('/getOwnedNfts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const network = req.body.network;
            const pubKey = req.body.public_key;
            console.log(`hello world`);
            Moralis.start({ serverUrl: "https://inuchpvr19tw.usemoralis.com:2053/server", appId: "MhvbvOiMJHtoL1iOTay1RS0wfwkfMRzzAj7kGbq8" });
            const options = { chain: network, address: pubKey };
            const retrieved_nfts = yield Moralis.Web3API.account.getNFTs(options);
            console.log(retrieved_nfts.result);
            let result = retrieved_nfts.result;
            yield result.forEach((nft) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    yield axios_1.default.get(nft.token_uri).then(res => {
                        // console.log(res)
                        nft.metadata = res.data;
                    });
                }
                catch (e) {
                    console.log("failed");
                    nft.metadata = "not found";
                }
            }));
            // console.log(result);
            yield res.send({ result: result });
        }
        catch (e) {
            console.log(e);
            res.send({ failed: e });
        }
    }))();
}));
const PORT = 5005;
app.listen(PORT, () => console.log("Server running"));
