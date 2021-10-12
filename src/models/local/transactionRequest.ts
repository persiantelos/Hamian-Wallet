export  default class TransactionRequest
{
    account:string;
    name:string;
    authorization:AuthorizationModel[];
    data:any;
}

export class AuthorizationModel
{
    actor:string;
    permission:string;
}
 