import { createProxyMiddleware } from "http-proxy-middleware";
import config from "../config/config.js"

export const userProxy = createProxyMiddleware({
    target: `http://${config.user_url}:${config.user_port}`,
    changeOrigin:true
})

export const tableProxy = createProxyMiddleware({
    target: `http://${config.table_url}:${config.table_port}`,
    changeOrigin:true
})

export const orderProxy = createProxyMiddleware({
    target: `http://${config.order_url}:${config.order_port}`,
    changeOrigin:true
})

export const kitchenProxy = createProxyMiddleware({
    target: `http://${config.kitchen_url}:${config.kitchen_port}`,
    changeOrigin:true
})

export const paymentProxy = createProxyMiddleware({
    target: `http://${config.payment_url}:${config.payment_port}`,
    changeOrigin:true
})

export const menuProxy = createProxyMiddleware({
    target: `http://${config.menu_url}:${config.menu_port}`,
    changeOrigin:true
})