import Config from "src/common/config";
import axios from 'axios';
export default class BaseServices
{
    static async post(url:string,data:any)
    {
       var path=url;
       var headers:any={};
       if(window.localStorage.token)
       {
           headers['authorization']=window.localStorage.token
       }
       var dt = await axios.post(path,data,{headers}); 
       return dt.data.data;
    }
    static async postData(url:string,data:any)
    {
       var path=url;
       var headers:any={};
       if(window.localStorage.token)
       {
           headers['authorization']=window.localStorage.token
       }
       var dt = await axios.post(path,data,{headers}); 
       return dt.data;
    }
    static async getData(url:string,data:any)
    {
       var path=url;
       var headers:any={};
       if(window.localStorage.token)
       {
           headers['authorization']=window.localStorage.token
       }
       var dt = await axios.get(path ); 
       return dt.data;
    }
}