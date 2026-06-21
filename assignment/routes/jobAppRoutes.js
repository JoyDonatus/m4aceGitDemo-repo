const express = require('express');
const router = express.Router();

const jobAppController = require('../controllers/jobAppController');

router.post('/jobs', jobAppController.createApplication);
router.get('/jobs', jobAppController.getAllApplications);
router.get('/jobs/:id', jobAppController.getApplicationById);
router.put('/jobs/:id', jobAppController.updateApplication);
router.delete('/jobs/:id', jobAppController.deleteApplication);
module.exports = router;