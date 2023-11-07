import app from "app"
import config from "./config/config.js"

main()

async function main(){
    app.listen(config.port || 3001, config.gateway_url || "localhost",()=>{
        console.log(`🚀 Server has listening on ${config.backend_url || "localhost"}:${config.port || 3000}`)
    })
}