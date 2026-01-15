import express from "express"
const router =express.Router()

import { signUp,logIn,logOut,update } from "../controllers/auth.js";
import checkLog from "../middlewares/checkLog.js";

router.post("/signup",signUp);
router.post("/login",logIn);
router.get("/logOut",logOut);
router.post("/update",checkLog,update);

export default router