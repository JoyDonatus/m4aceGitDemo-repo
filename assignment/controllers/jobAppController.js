const Job = require('../models/job');

exports.createApplication = async (req, res) => {
    try {
        const newJob = await Job.create(req.body);
        res.status(201).json(newJob);
    } catch (error) {
        res.status(400).json({ message: "Error creating job entry", error: error.message });
    }
};

exports.getApplication = async (req, res) => {
    try {
        const jobs = await Job.find({});
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
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

exports.getApplicationById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.updateApplication = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        Object.assign(job, req.body);
        const updatedJob = await job.save();
        res.status(200).json(updatedJob);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.deleteApplication = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findByIdAndDelete(jobId);

        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        res.status(200).json({ message: "Job deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
