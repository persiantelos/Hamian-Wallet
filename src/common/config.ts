import SocketService from "src/localService/socketService";

 
export default class Config
{
    static server:string="http://localhost:9130/"; 
    static chainAddress:string="https://telos.greymass.com/v1/chain/"; 
    static soket:SocketService=new SocketService();
}