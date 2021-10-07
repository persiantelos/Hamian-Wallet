const eosio=require('eosjs');
const ecc = require('eosjs-ecc');
var rest=require('./rest');
module.exports = class Wallet{
    async checkKey(dt)
    { 
        var chain=dt.chain;
        if(chain=='EOS')
        {  
            var pub = ecc.PrivateKey(dt.key).toPublic().toString('EOS')// await public_key_from_private(dt.key);
            console.log('>>',pub)
            var data = await rest.post(dt.url+'/v1/history/get_key_accounts',{"public_key":pub});
            data.publicKey=pub;
            return data
        }
    }
    async addAccount(dt)
    { 
        dt.publicKey =ecc.PrivateKey(dt.privateKey).toPublic().toString('EOS')
        var data =await global.gclass.storage.loadData();
        console.log('---->>>>>>>>>>>>>',data)
        if(!data)return false;
        if(!data.accounts)data.accounts=[];
        var exist = data.accounts.filter(p=>p.authority==dt.authority && p.privateKey==dt.privateKey && p.name==dt.name)[0];
        if(exist) return false;
        data.accounts.push(dt);
        await global.gclass.storage.saveData(data);
        return true
    } 
    async getAccounts()
    {
        var data =await global.gclass.storage.loadData();
        if(!data)return false;
        if(!data.accounts)data.accounts=[];
        for(var a of data.accounts)
        {
            a.privateKey="";
        }
        console.log('ssssssssss',data)
        return data.accounts;
    }
}