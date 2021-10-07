import ResourceData from "./resourceData";

export default class Account{
    constructor(data:any)
    {
        this.account_name = data.account_name;
        this.core_liquid_balance = data.core_liquid_balance;
        this.cpu_limit = data.cpu_limit;
        this.net_limit = data.net_limit;
        this.ram_limit = new ResourceData({available:data.ram_quota,used:data.ram_usage});
        this.created = data.created;
        this.total_cpu=data.total_resources.cpu_weight;
        this.total_net=data.total_resources.net_weight;
        this.total_ram=data.total_resources.ram_bytes;
        for(var a of data.permissions)
        {
            var parent=a.parent;
            var authority=a.perm_name;
            for(var key of a.required_auth.keys)
            {
                this.permissions.push(new Permission({parent,authority,key:key.key}))
            }
        }
    }
    account_name:string;
    core_liquid_balance:string;
    //cpu data usage
    cpu_limit:ResourceData;
    //net data usage
    net_limit:ResourceData;
    ram_limit:ResourceData;
    //created date time
    created:string;

    total_cpu:string;
    total_net:string;
    total_ram:number;


    
    privileged:boolean;
    cpu_weight:number;
    net_weight:number;
    head_block_num:number;
    head_block_time:string;
    last_code_update:string;
    permissions:Permission[]=[];
}

export class Permission
{
    constructor(data:any)
    {
        Object.assign(this,data);
    }
    key:string;
    authority:string;
    parent:string;
} 
