import axios from 'axios';
import express from 'express';
const Moralis = require('moralis/node');
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());





app.get('/',async(req,res)=>{
    (async()=>{
        console.log(`hello world`);
        Moralis.start({ serverUrl: "https://inuchpvr19tw.usemoralis.com:2053/server", appId: "MhvbvOiMJHtoL1iOTay1RS0wfwkfMRzzAj7kGbq8" });
        const options = { chain: 'polygon', address: '0x939A2d5A8CB10afD30b4162F4b5885A3A547c225' };
        const polygonNFTs = await Moralis.Web3API.account.getNFTs(options);
        console.log(polygonNFTs);
    })()
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log("Server running"))
