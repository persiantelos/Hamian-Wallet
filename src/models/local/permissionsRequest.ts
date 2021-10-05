import BaseRequest from "./baseRequest";

export default class PermissionsRequest extends BaseRequest
{
    constructor(data:any)
    {
        super(data); 
        this.origin=data.payload.origin;
    }
    origin:string;
}