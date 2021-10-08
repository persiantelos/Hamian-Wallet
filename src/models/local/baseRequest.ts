export default class BaseRequest
{
    constructor(data:any)
    {
        if(!data)return;
        this.appkey = data.appkey;
        this.id = data.id;
        this.nextNonce = data.nextNonce;
        this.nonce = data.nonce;
        this.payloadId = data.payloadId;
        this.payloadOrigin = data.payloadOrigin;
    }
    payloadId:string;
    payloadOrigin:string;
    appkey:string;
    id:string;
    nextNonce:string;
    nonce:string;
}