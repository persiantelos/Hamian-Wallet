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
}