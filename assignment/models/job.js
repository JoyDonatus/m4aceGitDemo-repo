import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    company: { type: String, required: true },
    role: { type: String, required: true },
    status: { type: String, enum: ['Applied', 'Interviewing', 'Rejected', 'Accepted'], default: 'Applied' },
    dateApplied: { type: Date, default: Date.now }
});

const Job = mongoose.model('Job', jobSchema);
export default Job;