

const ecc = require('eosjs-ecc');
var rest=require('./rest');
const CONNECTIONS='connections';
const APPLICATION='applicaion';

const Hasher =require( './utils/Hasher');
const IdGenerator =require( './utils/IdGenerator');
const EosioPlugin=require('./accounts/eosioPlugin')
module.exports = class Wallet{
    async checkKey(dt)
    { 
        var chain=dt.chain;
        if(chain=='eos')
        {   
            return await EosioPlugin.checkAccountData(dt);
        }
    }
    async addAccount(dt)
    {  

        dt=await EosioPlugin.createAccount(dt);  
        var data =await global.gclass.storage.loadData(); 
        if(!data)return false;
        if(!data.accounts)data.accounts=[];
        var exist = data.accounts.filter(p=>p._id==dt._id)[0];
        if(exist) return false;
        data.accounts.push(dt);
        await global.gclass.storage.saveData(data);
        return true
    } 

    async makeStandardTransaction(transaction)
    { 
        return await EosioPlugin.makeStandardTransaction(transaction);
        
    }

    async findAccount(id)
    {

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
        console.log('-------',id)
        var data = await global.gclass.storage.getFromJson(CONNECTIONS,id)
        if(data)
        {
            data.useTime=new Date().getTime();
            await global.gclass.storage.addToJson(CONNECTIONS,id,{data:data.data,useTime:new Date().getTime()})
            return data.data;
        }
        return null;
    }
    async saveConnection(data)
    { 
        data.result.hash = Hasher.unsaltedQuickHash(IdGenerator.text(32))
        await global.gclass.storage.addToJson(CONNECTIONS,data.key,{data,useTime:new Date().getTime()})
    }
    async acceptTransaction(id)
    {
        if(!global.temp[id])return;
        var payload=global.temp[id];


        HighLevelSockets.emit(payload.payloadOrigin,payload.payloadId,'api',
        {id:payloadOrigin.id,result:{returnedFields:{},signatures:['']}});
        delete  global.temp[id];
    }
    async rejectTransaction(id)
    {
        if(!global.temp[id])return;
        var payload=global.temp[id];
        HighLevelSockets.emit(payload.payloadOrigin,payload.payloadId,'api',
        {id:payloadOrigin.id,result:{code: 402,isError: true, message: "User rejected the signature request", type: "signature_rejected"}});

        delete  global.temp[id];
    }
}