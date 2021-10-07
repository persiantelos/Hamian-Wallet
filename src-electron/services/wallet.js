const eosio=require('eosjs');
const ecc = require('eosjs').modules.ecc; 
module.exports = class Wallet{
    checkKey(dt)
    { 
        var chain=dt.chain;
        if(chain=='eos')
        { 
            var pub = ecc.privateToPublic(dt.key);

        }
    }
    createWallet(dt)
    {
        var key=dt.key;
        var authority=dt.authority
    } 
}