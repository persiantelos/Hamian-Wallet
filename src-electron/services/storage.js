//const Store = require('electron-store');
const fs =require('fs');
var aesjs = require('aes-js');
const {app} = require('electron');

const Hamian_Setting = 'setting';
var stores={};
var password='';
module.exports = class Storage{ 
    
    stringToByteArray(s){
        var result = new Uint8Array(s.length);
        for (var i=0; i<s.length; i++){
            result[i] = s.charCodeAt(i);/* w ww. ja  v  a 2s . co  m*/
        }
        return result;
    }
    exist()
    {
        const path = `${app.getPath('userData')}/data.json`;
        var exist = fs.existsSync(path);
        return exist;
    }
    init(pass)
    {
        
    }
    loadData(pass)
    {
        password=pass;
        const path = `${app.getPath('userData')}/data.json`;
        var exist = fs.existsSync(path);
        if(!exist) return false;
        try{
            var key=this.stringToByteArray(password);
            var text = fs.readFileSync(path,{encoding: 'utf8'})+'';
            var textBytes = aesjs.utils.utf8.toBytes(text);
            var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
            var decryptedBytes = aesCtr.decrypt(textBytes);
            var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
            return JSON.parse(decryptedText) ;

        }catch(exp){}
    }
    saveData(data)
    {
        var text=JSON.stringify(data);
        var textBytes = aesjs.utils.utf8.toBytes(text);
        var key=this.stringToByteArray(password);
        var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
        var encryptedBytes = aesCtr.encrypt(textBytes);
        const path = `${app.getPath('userData')}/data.json`;
        fs.writeFileSync(path,encryptedBytes)

    }   
    

    
}