import express from 'express';
const router = express.Router();
import Web3 from 'web3';
import {OpenSeaPort, Network } from "opensea-js";
import { OrderSide } from "opensea-js/lib/types";
const { ethers } = require("ethers");


const provider = new Web3.providers.HttpProvider("https://api.mycryptoapi.com/eth");
const ethersProvider = new ethers.providers.JsonRpcProvider("https://api.mycryptoapi.com/eth", 1);


// @route       GET api/auth
// @desc        Login Route
// @access      public
router.post('/',[],async (req:any,res:any)=>{

      const key = req.body.key;
      let url = req.body.url;
      const additionalGas = req.body.gasPriority;
      const wallet = new ethers.Wallet(key, ethersProvider);
      const wyvern = "0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b";
      const seaport = new OpenSeaPort(provider, {
        networkName: Network.Rinkeby
      });
      if (url.lastIndexOf("/") == url.length) {
        url = url.substring(0, url.length - 1);
        console.log(url);
      }
      let asset_contract_address = url.substring(0, url.lastIndexOf("/"));
      asset_contract_address = asset_contract_address.substring(asset_contract_address.lastIndexOf("/") + 1);
      const token_id = url.substring(url.lastIndexOf("/") + 1);   
      (async () => {
        const order = await seaport.api.getOrder({ side: OrderSide.Sell, asset_contract_address: asset_contract_address, token_id: token_id })
        const abiEncoded = await seaport.fulfillOrder({ order, accountAddress: wallet.address })

        const txn = {
            to: wyvern,
            type: 2,
            data: abiEncoded.encoded,
            value: ethers.BigNumber.from(abiEncoded.txnData.value.toString()),
            maxPriorityFeePerGas: ethers.utils.parseUnits(additionalGas, "gwei")
        }

        try {
            const response = await wallet.sendTransaction(txn)
            console.log(response)
            res.send({respnse: response})
        } catch (e) {
            console.log(e)
           
        }

      })();
})



// @route       GET api/auth
// @desc        auth Route
// @access      public

router.get('/',[], async (req:any,res:any)=>{
    try{

   
    }
    catch(err){
        console.error(err);
        res.status(500).send('Server Error');
    }
})



module.exports = router;