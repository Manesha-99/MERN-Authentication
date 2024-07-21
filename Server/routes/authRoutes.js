import express from 'express'
import {sign_up, sign_in} from '../controllers/authControllers.js';


const router = express.Router();

router.post("/sign-up", sign_up);
router.post("/sign-in", sign_in);

export default router;