import LoginResponse from "src/models/local/loginResponse";
import StorageAccountModel from "src/models/storage/accountModel";
import BaseLocalService from "./baseLocalService";
export default class WalletService
{
    
    static walletName:string='wallet';
    static existData(chain:string,key:string,url:string)
    {
        return BaseLocalService.run(this.walletName,{action:'checkKey',data:{chain,key,url}});
    }
    static addAccount(account:StorageAccountModel)
    {
        return BaseLocalService.run(this.walletName,{action:'addAccount',data:account});
    }
    static getAccounts():Promise<StorageAccountModel[]>
    {
        return BaseLocalService.run(this.walletName,{action:'getAccounts',data:{}});
    }
    static saveConnection(data:LoginResponse):Promise<any>
    {
        return BaseLocalService.run(this.walletName,{action:'saveConnection',data});
    }
    static acceptTransaction(id:string):Promise<any>
    {
        return BaseLocalService.run(this.walletName,{action:'acceptTransaction',id});
    }
    static rejectTransaction(id:string):Promise<any>
    {
        return BaseLocalService.run(this.walletName,{action:'rejectTransaction',id});
    }
}