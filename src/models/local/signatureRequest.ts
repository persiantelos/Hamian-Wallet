export default class signatureRequest
{
    blockchain:string;
    network:NetworkModel;
    origin:string
    requiredFields:any;
}

export class NetworkModel
{
    blockchain:string;//eos
    chainId:string;
    host:string;
    httpEndpoint:string;
    name:string;
    protocol:string;
    token:string;
    port:number;
}
 