const Job = require('../models/job');

exports.createApplication = async (req, res) => {
    try {
        const newJob = await Job.create(req.body);
        res.status(201).json(newJob);
    } catch (error) {
        res.status(400).json({ message: "Error creating job entry", error: error.message });
    }
};

exports.getAllApplications = async (req, res) => {
    try {
        const jobs = await Job.find({});
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};