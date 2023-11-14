import { Router } from "express";
import {verifyUser, authorizeRole} from '../middleware/auth.js'
import {GetTables,BookSeat,CancelSeat,CheckIn,CheckOut,DeleteLateTables,VerifyCheckIn} from "../controllers/table.controller.js"

const tableRouter = Router();

tableRouter.route('/').get(verifyUser,authorizeRole('guest'),GetTables)
tableRouter.route('/book').post(verifyUser,authorizeRole('guest'),BookSeat)
tableRouter.route('/cancel').post(verifyUser,authorizeRole('guest'),CancelSeat)
tableRouter.route('/checkin').post(verifyUser,authorizeRole('guest'),CheckIn)
tableRouter.route('/checkout').post(verifyUser,authorizeRole('guest'),CheckOut)
tableRouter.route('/verifycheckin').post(verifyUser,authorizeRole('staff'),VerifyCheckIn)
tableRouter.route('/deletetables').post(verifyUser,authorizeRole('staff'),DeleteLateTables)

export { tableRouter };  
