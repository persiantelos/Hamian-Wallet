//const Store = require('electron-store');
const fs =require('fs');
var aesjs = require('aes-js');
var pbkdf2 = require('pbkdf2');
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
    isLogin()
    {
        return !!password;
    }
    init(dt)
    {
        password=dt.password;
        if(dt.data)
        {

        }
        else
        {
            this.saveData({});
        }
        return true;
    }
    loadData(pass)
    {
        
        password=pass;
        const path = `${app.getPath('userData')}/data.json`;
        var exist = fs.existsSync(path);
        if(!exist) return false;
        try{

            var key=pbkdf2.pbkdf2Sync(password, 'salt', 1, 256 / 8, 'sha512');//this.stringToByteArray(password);
            var text = fs.readFileSync(path,{encoding: 'utf8'})+'';
            var textBytes = aesjs.utils.utf8.toBytes(text);
            var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
            var decryptedBytes = aesCtr.decrypt(textBytes);
            var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
            return JSON.parse(decryptedText) ;

        }catch(exp){}
        return false
    }
    saveData(data)
    {
        var text=JSON.stringify(data);
        var textBytes = aesjs.utils.utf8.toBytes(text);
        var key=pbkdf2.pbkdf2Sync(password, 'salt', 1, 256 / 8, 'sha512');//this.stringToByteArray(password);
        var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
        var encryptedBytes = aesCtr.encrypt(textBytes);
        const path = `${app.getPath('userData')}/data.json`;
        fs.writeFileSync(path,encryptedBytes)

    }   
    

    
}