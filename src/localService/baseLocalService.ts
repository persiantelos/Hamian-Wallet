const { ipcRenderer} = window.require('electron');
export default class BaseLocalService
{
    static globalId:string='';
    static counter:number=0;
    static temp:any={};
    static run(name:string,data:any):Promise<any>
    {
        
        return new Promise((res,rej)=>{
            var id=(++this.counter).toString(); 
            ipcRenderer.send('transfer',{id,data,name,globalId:this.globalId});
            this.temp[id]={res,rej};
            setTimeout(()=>{
                if(this.temp[id])
                {
                    this.temp[id].rej({m:'timeout'});
                    delete this.temp[id];
                }
            },10000)
        });
    }
    static reciveData(id:string,data:any)
    {
        if(this.temp[id])
        {
            this.temp[id].res(data)
            delete this.temp[id];
        }
    }
}
ipcRenderer.on('transfer', (event, payload:any) => {
    console.log(payload)
    BaseLocalService.reciveData(payload.id,payload.data);
});