import { Router } from "express";
import { userProxy,tableProxy,kitchenProxy,menuProxy,orderProxy,paymentProxy } from "../middleware/proxy.js"
import {tableRouter}  from "./table.js";

const router = Router()

router.use("/user",userProxy)

router.use("/table",tableRouter)

router.use("/menu",menuProxy)

router.use("/kitchen",kitchenProxy)

router.use("/order",orderProxy)

router.use("/payment",paymentProxy)

export default router