import express from "express"
const router=express.Router()

import checkLog from "../middlewares/checkLog.js";
import {allUsers, allMessages, sendMessage} from "../controllers/message.js";

router.post("/:id",checkLog,allMessages);
router.get("/allUsers",checkLog,allUsers);
router.post("/send/:id",checkLog,sendMessage)

export default router