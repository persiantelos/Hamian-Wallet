const { Api, JsonRpc, RpcError } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');      // development only
const fetch = require('node-fetch');                                    // node only; not needed in browsers
const { TextEncoder, TextDecoder } = require('util'); 
var url='https://mainnet.persiantelos.com'
const ecc = require('eosjs-ecc');
var rest=require('../rest');

const Hasher =require( '../utils/Hasher');
const IdGenerator =require( '../utils/IdGenerator');
module.exports=class EosioPlugin{
    static hash='';
    static async checkAccountData(account)
    {
        var pub = ecc.PrivateKey(account.key).toPublic().toString('EOS');
        var data = await rest.post(account.url+'/v1/history/get_key_accounts',{"public_key":pub});
        data.publicKey=pub;
        return data;
    }
    static async getHash()
    {
        
        console.log(IdGenerator)
        if(!this.hash){
            this.hash = Hasher.unsaltedQuickHash(IdGenerator.text(32))
            
        }
        return this.hash;
    }
    static async createAccount(data)
    {  
        //if(!data.hash)data.hash=await this.getHash(); 
        data.publicKey =ecc.PrivateKey(data.privateKey).toPublic().toString('EOS');
        data._id=data.authority+data.privateKey+data.name;
        return data;
    }
    static async makeStandardTransaction(transaction)
    { 
        if(transaction.serializedTransaction)
        {
            var rpc = new JsonRpc(url, { fetch });
            var api = new Api({ rpc, signatureProvider:{}, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
            var xx=await api.deserializeTransactionWithActions(transaction.serializedTransaction)            
            return xx.actions;
        }
        else
        {
            return transaction;
        }
    }
}