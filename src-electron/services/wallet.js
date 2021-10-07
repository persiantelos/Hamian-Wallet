const eosio=require('eosjs');
const ecc = require('eosjs-ecc');
var rest=require('./rest');
module.exports = class Wallet{
    async checkKey(dt)
    { 
        var chain=dt.chain;
        if(chain=='EOS')
        {  
            var pub =ecc.PrivateKey(dt.key).toPublic().toString('EOS')// await public_key_from_private(dt.key);
            console.log('>>',pub)
            var data = rest.post(dt.url+'/v1/history/get_key_accounts',{"public_key":pub});
            return data
        }
    }
    createWallet(dt)
    {
        var key=dt.key;
        var authority=dt.authority
    } 
}