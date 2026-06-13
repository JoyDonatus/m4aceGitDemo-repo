//Implement single and multiple file upload endpoints with Multer

const express = require('express');
const multer  = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
        filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/upload-single', upload.single('avatar'), (req, res) => {
    
    if (!req.file) {
        return res.status(400).send("No file uploaded. Please attach a file under the key 'avatar'.");
    }

    res.status(200).json({
        message: "Single file uploaded successfully!",
        fileDetails: req.file
    });
});

app.post('/upload-multiple', upload.array('documents', 5), (req, res) => {

    if (!req.files || req.files.length === 0) {
        return res.status(400).send("No files uploaded. Please attach files under the key 'documents'.");
    }

    res.status(200).json({
        message: `${req.files.length} files uploaded successfully!`,
        filesDetails: req.files
    });
});

app.listen(PORT, () => {
    console.log(`Multer assignment server running on http://localhost:${PORT}`);
    console.log("Reminder: Ensure you have a folder named 'uploads' in this project directory.");
});