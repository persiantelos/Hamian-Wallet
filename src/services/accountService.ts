import Config from "src/common/config";
import Account from "src/models/account";
import TokenModel from "src/models/tokenModel";
import BaseServices from "./baseServices";

export default class AccountService
{
    static getTokens(account:string,chain:string ):Promise<TokenModel[]>
    {
        return BaseServices.post(Config.chainAddress+'wallet/tokens',{account,chain})
    }
    static async getAccount(account:string,url:string=Config.chainAddress):Promise<Account>
    {
        var acc=await BaseServices.postData(url+'/v1/chain/get_account',{account_name:account});
        return new Account(acc);
    }
    static async getTokenBalance(account:string,contract:string='persiandaric',url:string=Config.chainAddress):Promise<string>
    {
        var data={"json":true,"code":contract,"scope":account,"table":"accounts","lower_bound":null,"upper_bound":null,"index_position":1,"key_type":"","limit":"100","reverse":false,"show_payer":false};
        var acc=await BaseServices.postData(url+'/v1/chain/get_table_rows',data);
        if(acc.rows[0])
            return acc.rows[0].balance
        return "0.0000 DRIC";  
    }
}