import { Router } from "express";
import { userProxy,tableProxy,kitchenProxy,menuProxy,orderProxy,paymentProxy } from "../middleware/proxy.js"

const router = Router()

router.use("/user",userProxy)

router.use("/table",tableProxy)

router.use("/menu",menuProxy)

router.use("/kitchen",kitchenProxy)

router.use("/order",orderProxy)

router.use("/payment",paymentProxy)

export default router