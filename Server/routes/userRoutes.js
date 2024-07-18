import express from "express"
import { temp } from "../controllers/userControllers.js"

const router = express.Router();

router.get("/", temp)

export default router;