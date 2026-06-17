const express = require('express');
const router = express.Router();

const jobAppController = require('../controllers/jobAppController');

router.post('/jobs', jobAppController.createApplication);
router.get('/jobs', jobAppController.getAllApplications);

module.exports = router;