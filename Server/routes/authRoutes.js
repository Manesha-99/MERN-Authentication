import express from 'express'
import {test_auth} from '../controllers/authControllers.js';
import { User } from '../models/UserModel.js';

const router = express.Router();

router.post("/", test_auth);

export default router;