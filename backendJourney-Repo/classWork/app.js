const express = require('express');
const app = express();

app.use(express.json());

let jobApplications = [
    { id: 1, company: "Google", role: "Frontend Developer", dateApplied: "2026-06-01", status: "Interviewing" },
    { id: 2, company: "Stripe", role: "Backend Engineer", dateApplied: "2026-06-04", status: "Applied" }
];

app.post('/jobs', (req, res) => {
    const company = req.body.company;
    const role = req.body.role;
    const dateApplied = req.body.dateApplied;
    const status = req.body.status;

    const newId = jobApplications.length + 1;

    const newApplication = {
       
}
})

app.get('/', (req, res) => {
    res.status(200).json({message:"Welcome to the Job Application Tracker API"});
});

//GET /jobs - list all applications

app.get('/jobs', (req, res) => {
    res.status(200).json(jobApplications); //listing all applications
});

//GET /jobs/:id - get a single application

app.get('/jobs/:id', (req, res) => {
    const jobId = parseInt(req.params.id); // converting the id to an integer
    const job = jobApplications.find(u => u.id === jobId); 
    
    if (job) {
        res.status(200).json(job);
    } else {
        res.status(404).json({ status: 'error', message: 'Job application not found' });
    }
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
