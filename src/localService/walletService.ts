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
        return BaseLocalService.run(this.walletName,{action:'addAccount',data:{}});
    }
}