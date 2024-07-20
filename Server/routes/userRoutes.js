import express from "express"
import {get_users} from "../controllers/userControllers.js"

const router = express.Router();

router.get("/", get_users)

export default router;