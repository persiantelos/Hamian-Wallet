import BaseLocalService from "./baseLocalService";



export default class StorageService
{
    static storageName:string='storage';
    static existData()
    {
        return BaseLocalService.run(this.storageName,{action:'exist'});
    }
}