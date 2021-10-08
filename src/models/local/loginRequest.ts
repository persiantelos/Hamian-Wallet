import BaseRequest from "./baseRequest";

export default class LoginRequest extends BaseRequest
{
    constructor(data:any=null)
    {
        super(data);
        if(!data)return;
        Object.assign(this,data.payload.fields.accounts[0]);
        this.origin=data.payload.origin;
    }
    blockchain:string;
    chainId:string;
    host:string;
    httpEndpoint:string;
    port:number;
    protocol:string;
    origin:string;
}
 
// type: "identityFromPermissions"