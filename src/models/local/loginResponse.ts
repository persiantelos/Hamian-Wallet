import StorageAccountModel from "../storage/accountModel";
import LoginRequest from "./loginRequest";

export default class LoginResponse
{
    constructor(request:LoginRequest,account:StorageAccountModel){
        this.id=request.id;
        this.result={
            hash:'',
            name:account.name,
            publicKey:account.publicKey,
            accounts:[account]
        };
    }
    id:string;
    key:string;
    result:any={};
}