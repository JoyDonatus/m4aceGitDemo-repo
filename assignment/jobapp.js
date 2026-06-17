
//Assignment 1: Create CRUD endpoints for job applications:
// POST /jobs - add a new application (company, role, date applied, status)
    // GET /jobs - list all applications
    // GET /jobs/:id - get a single application
    // PUT /jobs/:id - update details or status
    // DELETE /jobs/:id - remove an application

const express = require('express');
const app = express();

app.use(express.json());
const port = process.env.PORT;

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

    const newJobApplication = {
        id: newId,
        company: company,
        role: role,
        dateApplied: dateApplied,
        status: status
    }

    jobApplications.push(newJobApplication); 

    res.status(201).json({
    message: "Job application created successfully",
    Application: newJobApplication
  });

})

app.get('/', (req, res) => {
    res.status(200).json({message:"Welcome to the Joy's Job Application"});
});

//GET /jobs - list all applications

app.get('/jobs', (req, res) => {
    res.status(200).json(jobApplications); //listing all applications
});

//GET /jobs/:id - get a single application

app.get('/jobs/:id', (req, res) => {
    const jobId = parseInt(req.params.id); 
    const job = jobApplications.find(u => u.id === jobId); 
    
    if (job) {
        res.status(200).json(job);
    } else {
        res.status(404).json({ status: 'error', message: 'Job application not found' });
    }
});


// PUT /jobs/:id - update details or status

app.put('/jobs/:id', (req, res) => {
    const jobId = parseInt(req.params.id); 
    const jobToReplace = jobApplications.find(job => job.id === jobId); 

    if (!jobToReplace){
        return res.status(404).json({ status: 'error', message: 'Job application not found' });
    }

    else {
        jobToReplace.company = req.body.company;
        jobToReplace.role = req.body.role;
        jobToReplace.dateApplied = req.body.dateApplied;
        jobToReplace.status = req.body.status;
        return res.status(200).json(jobToReplace);
    }
});

// DELETE /jobs/:id - remove an application
app.delete('/jobs/:id', (req, res) => {
    const jobId = parseInt(req.params.id); 
    const jobToDelete = jobApplications.findIndex(job => job.id === jobId);

    if (jobToDelete === -1) {
        return res.status(404).json({ status: 'error', message: 'Job application not found' });
    }

    else {
        jobApplications.splice(jobToDelete, 1);
        return res.status(200).json({message: "Job Application deleted successfully" + jobId});
    }

})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
