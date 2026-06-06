//Middleware Practice - 
// Implement built-in middleware (JSON parsing, static files), 
// create custom middleware for logging and request timing, 
// implement route-specific authentication middleware, 
// and error handling middleware


const express = require("express");

const app = express();
const PORT = 3000;

/* ==========================
   BUILT-IN MIDDLEWARE
========================== */

// Parse JSON requests
app.use(express.json());

// Serve static files
app.use(express.static("public"));

/* ==========================
   CUSTOM LOGGING MIDDLEWARE
========================== */

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger);

/* ==========================
   REQUEST TIMING MIDDLEWARE
========================== */

const requestTimer = (req, res, next) => {
    const startTime = Date.now();

    res.on("finish", () => {
        const endTime = Date.now();
        const duration = endTime - startTime;

        console.log(`Request took ${duration} ms`);
    });

    next();
};

app.use(requestTimer);

/* ==========================
   AUTHENTICATION MIDDLEWARE
========================== */

const authenticate = (req, res, next) => {
    const apiKey = req.headers["api-key"];

    if (!apiKey) {
        return res.status(401).json({
            message: "Access denied. API key required."
        });
    }

    if (apiKey !== "12345") {
        return res.status(403).json({
            message: "Invalid API key."
        });
    }

    next();
};

/* ==========================
   ROUTES
========================== */

// Public Route
app.get("/", (req, res) => {
    res.send("Welcome to the Home Page");
});

// JSON Route
app.post("/data", (req, res) => {
    res.json({
        receivedData: req.body
    });
});

// Protected Route
app.get("/dashboard", authenticate, (req, res) => {
    res.json({
        message: "Welcome to the dashboard"
    });
});

// Route that intentionally throws an error
app.get("/error", (req, res, next) => {
    const error = new Error("Something went wrong!");
    next(error);
});

/* ==========================
   404 HANDLER
========================== */

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

/* ==========================
   ERROR HANDLING MIDDLEWARE
========================== */

app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(500).json({
        message: err.message
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});