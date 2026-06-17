const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    company: { type: String, required: true },
    position: { type: String, required: true },
    status: { type: String, enum: ['applied', 'interviewing', 'rejected', 'accepted'], default: 'applied' },
    dateApplied: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);