import BaseRequest from "./baseRequest";

export default class LoginRequest extends BaseRequest
{
    appkey:string;
    id:string;
    nextNonce:string;
    nonce:string;
    origin:string;
    //{origin: "telos.bloks.io"} 
    payload:any;
}
 
// type: "identityFromPermissions"