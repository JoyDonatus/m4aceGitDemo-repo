//Middleware Practice - 
// Implement built-in middleware (JSON parsing, static files), 
// create custom middleware for logging and request timing, 
// implement route-specific authentication middleware, 
// and error handling middleware


const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());

app.use(express.static('public'));


app.use((req, res, next) => {
    const startTime = Date.now(); 
    res.on('finish', () => {
        const duration = Date.now() - startTime; // Calculate total time taken
        console.log(`[LOG] ${req.method} ${req.url} - Status: ${res.statusCode} (${duration}ms)`);
    });

    next(); 
});


const checkAuth = (req, res, next) => {
    const authToken = req.headers['authorization'];

    if (authToken === 'secret-joy-token') {
        next(); 
    } else {
        res.status(401).json({ error: "Unauthorized access! Valid token missing." });
    }
};

app.get('/api/public', (req, res) => {
    res.send("This data is public. Anyone can see this!");
});

app.get('/api/dashboard', checkAuth, (req, res) => {
    res.send("🔒 Welcome to the secure admin dashboard, Joy!");
});

app.get('/api/simulate-error', (req, res, next) => {
    try {
        throw new Error("Something went horribly wrong with the server database!");
    } catch (err) {
        next(err); 
    }
});
app.use((err, req, res, next) => {
    console.error(`💥 ERROR DETECTED: ${err.message}`);
    
    res.status(500).json({ 
        status: "Fail",
        message: "Internal Server Error",
        errorDetails: err.message 
    });
});

app.listen(PORT, () => {
    console.log(`Middleware lab running on http://localhost:${PORT}`);
});