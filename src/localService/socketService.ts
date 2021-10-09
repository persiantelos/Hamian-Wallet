import BaseRequest from "src/models/local/baseRequest";

const {remote, ipcRenderer} = window.require('electron');
export default class SocketService
{
	static counter:number=0;
	static eventTemp:any={};
	static names:any={};
	static addEvent(name:string ,func:(data:any)=>any):string
	{
		var id='id'+this.counter;
		if(!this.eventTemp[name])this.eventTemp[name]={};
		this.eventTemp[name][id]=func;
		this.names[id]=name;
		return id;
	}
	static deleteEvent(id:string)
	{
		if(this.eventTemp[this.names[id]])
		{
			delete this.eventTemp[this.names[id]][id]
			delete this.names[id];
		}
	}
	static emit(name:string,data:any)
	{ 
		for(var a in this.eventTemp[name])
		{
			var func=this.eventTemp[name][a];
			if(func)
			{
				try{ 
					func(data);
				}catch(exp){
					console.log('gg',exp);
					
				}
			}
		}
	}
	static sendData(request:BaseRequest,data:any){
		var dt={
			event:'api',
			data:JSON.parse(JSON.stringify(data)),
			id:request.payloadId,
			origin:request.payloadOrigin
		};
		console.log('----------',dt)
		ipcRenderer.send('prompt-response',dt);

	}
	static send(data:any){
		ipcRenderer.send('prompt-response',data);
	}
}
ipcRenderer.on('socketResponse', (event, payload) => {
	console.log('payload',payload)
	if(payload.type=='pair')
	{
		SocketService.send({event:"paired",data:true,id:payload.id,origin:payload.origin} );
	}
	else if(payload.type=='api')
	{
		if(payload.request.data?.type)
		{
			var dt=payload.request.data;
			dt.payloadId=payload.id;
			dt.payloadOrigin=payload.origin;
			SocketService.emit(payload.request.data.type,dt); 

		}
	}
});