import express from "express";
const router = express.Router();
import { registerUser, loginUser } from '../controllers/jobAppUserAuthController.js';

// POST requests because Bruno will be sending objects in the request body
router.post('/register', registerUser);
router.post('/login', loginUser);

//module.exports = router;
export default router;