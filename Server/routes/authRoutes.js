import express from 'express'
import {test_auth} from '../controllers/authControllers.js';


const router = express.Router();

router.post("/", test_auth);

export default router;