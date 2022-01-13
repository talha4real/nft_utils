import axios from 'axios';
const fs = require('fs');
import express from 'express';
const Moralis = require('moralis/node');
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());


app.post('/getOwnedNfts',async(req:any,res:any)=>{
    (async()=>{
        try{
        const network = req.body.network;
        const pubKey = req.body.public_key;
        console.log(`hello world`);
        Moralis.start({ serverUrl: "https://inuchpvr19tw.usemoralis.com:2053/server", appId: "MhvbvOiMJHtoL1iOTay1RS0wfwkfMRzzAj7kGbq8" });
        const options = { chain: network, address: pubKey };
        const retrieved_nfts = await Moralis.Web3API.account.getNFTs(options);
        console.log(retrieved_nfts.result);
        let result = retrieved_nfts.result;
        await result.forEach(async(nft:any)=>{
            try{
                    await axios.get(nft.token_uri).then(res=>{
                        // console.log(res)
                        nft.metadata = res.data;
                })
                }catch(e){
                    console.log("failed");
                    nft.metadata ="not found";
                }
        })
        // console.log(result);
        await res.send({result: result})
        }catch(e){
            console.log(e);
            res.send({failed: e})
        }
    })()
})

const PORT=5005;

app.listen(PORT,()=>console.log("Server running"))
