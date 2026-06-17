//Create middleware to verify JWT tokens and attach user data to requests

const jwt = require('jsonwebtoken');

const varifyToken = (req, res, next) =>{
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: "Access Denied. No token provided." });
        }
        const token = authHeader.split(' ')[1];
        try {
            const secretKey = "your_super_secret_key"; 
            const decodedUserData = jwt.verify(token, secretKey);
            req.user = decodedUserData;

            next();
        }catch (error) {
        // If the token is expired, fake, or edited, it throws an error
        return res.status(403).json({ message: "Invalid or expired token." });
    }
};

module.exports = verifyToken;
        