const eosio=require('eosjs');
// const ecc = require('eosjs').modules.ecc; 
var request = require('request');
var rest=require('./rest');
module.exports = class Wallet{
    async checkKey(dt)
    { 
        var chain=dt.chain;
        if(chain=='EOS')
        { 
            var pub = ecc.privateToPublic(dt.key);
            var data = rest.post(dt.url+'/v1/history/get_key_accounts',{"public_key":pub});
            console.log(data);
        }
    }
    createWallet(dt)
    {
        var key=dt.key;
        var authority=dt.authority
    } 
}