import { ServerOptions } from "https"; 
const net = require('net');
const http = require('http');
const https = require('https'); 
// import WebSocket from 'ws'
const WebSocket =window.require('ws');
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
        console.log('-------->',this.websockets)
		const _certs = {
            key: `-----BEGIN RSA PRIVATE KEY-----
            MIICWgIBAAKBgGZpxt0wKPsxRuPlGndXaKJ7U+AgCyufPB9xqDxBE6Vz5iFuWq3r
            gFt6UcHhtpjHEMwY3rRBxMPgJpor4n9j96xKQVjqJY0ygQnj+XG3IEAXs6yxaX0Z
            tZyNCMxOynrvljr+wMQopduFNq/zL6e3aMW57eqelcl/O6kW2IyTxTsZAgMBAAEC
            gYAXUkci33C1owcNpoJcYt9FAOicxS9GA8DhODSjY/5hUv845bRonpRgQH6VtBys
            tcgxcghk7AUuxcCEozG06MLhgl3JBq2/G2wifOysgEkqW2AQc4h2KA9Ny6J77MHY
            6JCRcbufyFCBaAMaLY/o3hdAErkzfuZH+gngUUAf5CjfcQJBAL6NFaejqWdGd3Kk
            Bqqj91gPUcMJ3bkiM7BjiYc2RbwKX9sF9rzhJXLhcJR4UrjtY7A633OXR9VPV8mR
            FJB4d/8CQQCJltZt9heCTgaWrJo9LE2cZr4V8sVzAg18X/fME7u2b+VBSL1MM2zZ
            7F4HeLbNw4cxZ7xUEEwAe4s6MmJ2jwznAkARYBwRZUMVP7+0nHBfLwRm6z6xYjzt
            nMjJ1Mm9op1JQEjtV+Xf40fe6d+yKiag5kSo1TV6/Nh4AvwmTSxq4BFRAkAVFZtY
            kHy7yC80SdD9DNv72rbIcEKXxDnC1IYJrQB4DZ+pKHdxxPOqVZF3PaVt1MfT51yx
            2Sl8bXJBgdUa7AMDAkB8aEBkAEtLFSk+JPRxSWrVX6POI7Ilq1vExSoJ8YBBYfGJ
            hYN9dn6pi+68bNd4i7MwACveEEOM2EaYAVPAoZ+l
            -----END RSA PRIVATE KEY-----`,
            cert: `-----BEGIN PUBLIC KEY-----
            MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGZpxt0wKPsxRuPlGndXaKJ7U+Ag
            CyufPB9xqDxBE6Vz5iFuWq3rgFt6UcHhtpjHEMwY3rRBxMPgJpor4n9j96xKQVjq
            JY0ygQnj+XG3IEAXs6yxaX0ZtZyNCMxOynrvljr+wMQopduFNq/zL6e3aMW57eqe
            lcl/O6kW2IyTxTsZAgMBAAE=
            -----END PUBLIC KEY-----`
          };;
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
			this.websockets.push(new WebSocket({ server }));
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