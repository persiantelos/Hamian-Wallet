export default class ResourceData
{
    constructor(data:any)
    {
        Object.assign(this,data);
    }
    available:number;
    max:number;
    used:number;

}