import express from "express";
import {verifyUser, authorizeRole} from '../middleware/auth.js'
import {GetTables} from "../controllers/table.controller.js"

const tableRouter = express.Router({ mergeParams: true });

tableRouter.route('/v1').get(verifyUser,authorizeRole('guest'),GetTables)

export { tableRouter };  
