import express from "express"
const router=express.Router()

import checkLog from "../middlewares/checkLog.js";
import {allUsers, allMessages, sendMessage} from "../controllers/message.js";

router.get("/allUsers",checkLog,allUsers);
router.post("/send",checkLog,sendMessage)
router.post("/:id",checkLog,allMessages);


export default router