import express from 'express'
import {sign_up, sign_in, google} from '../controllers/authControllers.js';


const router = express.Router();

router.post("/sign-up", sign_up);
router.post("/sign-in", sign_in);
router.post("/google", google)

export default router;