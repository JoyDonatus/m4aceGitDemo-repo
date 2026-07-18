import express from "express";
import { protect } from '../middleware/authMiddleware.js';

import { 
  getAllApplications, 
  createApplication, 
  getApplicationById, 
  updateApplication, 
  deleteApplication 
} from '../controllers/jobAppController.js';

//import jobAppController from '../controllers/jobAppController.js';
const router = express.Router();

router.get('/', getAllApplications);
router.post('/jobs', protect, createApplication);
router.get('/jobs', getAllApplications);
router.get('/jobs/:id', getApplicationById);
router.put('/jobs/:id', protect, updateApplication);
router.delete('/jobs/:id', protect, deleteApplication);

//module.exports = router;
export default router;