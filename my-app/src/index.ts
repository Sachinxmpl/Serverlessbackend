//   "wrangler": "^3.60.3" CLI of cloudflare 

// export default {
// 	async fetch(request, env, ctx): Promise<Response> {
// 		return Response.json({
// 			message : "hi i am serverless backend"
// 		})
// 	},
// } satisfies ExportedHandler<Env>;



//? Where is the http server 
// Cloudflare expects you to write a logic to handle incoming requests and send responses back to client.
// cloudflare writes http server code for us

//? How can you do routing 
//body , headers , query string , request method 
// the request object gets all these for us 

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method)
		const uri = request.url;
		
		if (request.method === "GET") {

			if(uri ===  "/user"){
				//handle user request here  
			}

			return Response.json({
				message: "you sent a get request"
			});
		} 
		
		else if (request.method === "POST"){
			return Response.json({
				"message" : "This is a post request"
			})
		}
		else {
			return Response.json({
				message: "you did not send a get request"
			});
		}
	},
};


// There is like exterem level of routing in cloudflare


//! Lets deploy 
//login to cloudflare   npx wrangler login

//You have granted authorization to Wrangler!
//npx wrangler whoami

//npm run deploy ==> runs wrangler deploy command

//noy your web is deployed managed by cloudflare , may be untill many request hit the url for free
// to customize domain you have to earn 



//?Adding express to it
//Why can’t we use express? Why does it cloudflare doesn’t start off with a simple express boiler plate?

//1 express hearvily depends on nodejs and has many dependencies itself


//? I have express application how to move to cloudflare 
// first split you application into generic function that works on both express and cloudflare
// now re-rewiret cloudflare code for remaining 5% express code and deploy it

//? what is hono 


