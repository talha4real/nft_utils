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

interface SquareConfig {
    color?: string;
    width?: number;
  }
   
app.use('/api/buy',require('./routes/api/buy'))
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

const PORT=5005;

app.listen(PORT,()=>console.log("Server running"))
