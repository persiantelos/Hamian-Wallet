const eosio=require('eosjs');
const ecc = require('eosjs-ecc');
var rest=require('./rest');
const CONNECTIONS='connections';
const APPLICATION='applicaion';
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
        return data.accounts;
    }
    async checkApplication(appKey)
    {
        var data = await global.gclass.storage.getFromJson(APPLICATION,appKey)
        return !!data;
    } 
    async saveApplication(appKey,name)
    {
        await global.gclass.storage.addToJson(APPLICATION,appKey,name); 
    }
    
    async forgetConnection(id)
    {
        await global.gclass.storage.deleteFromJson(CONNECTIONS,id)
    }
    async checkConnection(id)
    { 
        var data = await global.gclass.storage.getFromJson(CONNECTIONS,id)
        if(data)
        {
            data.useTime=new Date().getTime();
            await global.gclass.storage.addToJson(CONNECTIONS,id,{data,useTime:new Date().getTime()})
            return data.data;
        }
        return null;
    }
    async saveConnection(data)
    { 
        await global.gclass.storage.addToJson(CONNECTIONS,data.id,{data,useTime:new Date().getTime()})
    }
}