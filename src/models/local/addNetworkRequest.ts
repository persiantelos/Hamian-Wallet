import BaseRequest from "./baseRequest";

export default class AddNetworkRequest extends BaseRequest
{
    constructor(data:any)
    {
        super(data);
        Object.assign(this,data.payload.network);
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
 
// network:

//     blockchain: "eos"
//     chainId: "4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11"
//     host: "telos.greymass.com"
//     httpEndpoint: "https://telos.greymass.com"
//     port: 443
//     protocol: "https"


// origin: "telos.bloks.io"
