module.exports =class Rest
{
    static post(url,body)
    {
        return  new Promise((res,rej)=>{

            
            var options = {
                url: url,
                json: true,   // <--Very important!!!
                body 
            };
              
            request.post(options, (error, response, body) =>{
                if(error)
                {
                    rej(error);
                    return;
                }
                res(body);
            }); 
        });
    }
}