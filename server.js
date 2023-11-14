import app from "./app.js"
import config from "./config/config.js"

main()

async function main(){
    app.listen(config.server_port || 3006, config.server_url || "localhost",()=>{
        console.log(`🚀 Server has listening on ${config.server_url || "localhost"}:${config.server_port || 3000}`)
    })
}