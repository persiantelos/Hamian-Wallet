import BaseLocalService from "./baseLocalService";



export default class StorageService
{
    static storageName:string='storage';
    static existData()
    {
        return BaseLocalService.run(this.storageName,{action:'exist'});
    }
    static isLogin()
    {
        return BaseLocalService.run(this.storageName,{action:'isLogin'});
    }
    static login(password:string)
    {
        return BaseLocalService.run(this.storageName,{action:'login',data:password});
    }
    static initData(password:string,data:string)
    {
        return BaseLocalService.run(this.storageName,{action:'init',data:{password,data}});
    }
    static saveConnection(password:string,data:string)
    {
        return BaseLocalService.run(this.storageName,{action:'init',data:{password,data}});
    }
}