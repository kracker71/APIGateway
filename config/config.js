import {config} from "dotenv"

config()

const env_config = {
    server_url : process.env.GATEWAY_URL? process.env.GATEWAY_URL: "localhost",
    server_port : process.env.GATEWAY_PORT? process.env.GATEWAY_PORT: "3006",
    user_url : process.env.USER_SERVICE_URL? process.env.USER_SERVICE_URL: "localhost",
    user_port : process.env.USER_SERVICE_PORT? process.env.USER_SERVICE_PORT: "3000",
    kitchen_url : process.env.KITCHEN_SERVICE_URL? process.env.KITCHEN_SERVICE_URL: "localhost",
    kitchen_port : process.env.KITCHEN_SERVICE_PORT? process.env.KITCHEN_SERVICE_PORT: "3003",
    table_url : process.env.TABLE_SERVICE_URL? process.env.TABLE_SERVICE_URL: "localhost",
    table_port : process.env.TABLE_SERVICE_PORT? process.env.TABLE_SERVICE_PORT: "3001",
    order_url : process.env.ORDER_SERVICE_URL? process.env.ORDER_SERVICE_URL: "localhost",
    order_port : process.env.ORDER_SERVICE_PORT? process.env.ORDER_SERVICE_PORT: "3002",
    menu_url : process.env.MENU_SERVICE_URL? process.env.MENU_SERVICE_URL: "localhost",
    menu_port : process.env.MENU_SERVICE_PORT? process.env.MENU_SERVICE_PORT: "3005",
    payment_url : process.env.PAYMENT_SERVICE_URL? process.env.PAYMENT_SERVICE_URL: "localhost",
    payment_port : process.env.PAYMENT_SERVICE_PORT? process.env.PAYMENT_SERVICE_PORT: "3004",
    node_env : process.env.NODE_ENV? process.env.NODE_ENV: "development"
}

export default env_config