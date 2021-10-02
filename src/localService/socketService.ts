import { ServerOptions } from "https";
const CoreSocketService = require("@walletpack/core/services/utility/SocketService");
const net = require('net');
const http = require('http');
const https = require('https');
const WebSocket = require('ws');
export default class SocketService
{
    ports:any={};
    websockets:any[]=[];
    constructor()
    {
        this.init();
    }
    async init()
    {
		const _certs = await CoreSocketService.getCerts();
		if(this.websockets.length) return this.websockets;
		await this.findOpenPorts();
		const requestHandler = (_, res) => {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Request-Method', '*');
			res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
			res.setHeader('Access-Control-Allow-Headers', '*');
			res.setHeader('Content-Type', 'application/json');
			res.end('scatter');
		}
		await Promise.all(Object.keys(this.ports).map(async port => {
			const server = this.ports[port] ? https.createServer(_certs, requestHandler) : http.createServer(requestHandler);
			this.websockets.push(new WebSocket.Server({ server }));
			server.listen(port);
			return true;
		}));
		this.websockets.map(ws => ws.on('connection', this.socketHandler));
        console.log('-------->',this.websockets)

    }
    async socketHandler(socket:any)
    {
        
    }
	async findOpenPorts(){
		const isPortAvailable = (port = 0) => {
			return new Promise(async resolve => {
				const server = net.createServer();

				server.once('error', err => resolve(err.code !== 'EADDRINUSE'));

				server.once('listening', () => {
					server.close();
					resolve(true);
				});

				server.listen(port);
			})
		}

		const findPort = async (delta=0) => {
			let port = 50005+delta;
			while(!await isPortAvailable(port)) port+=1500;
			return port;
		};

		const http = await findPort();
		const https = await findPort(1);
		this.ports = {[http]:false, [https]:true};
		return true;
	}
}