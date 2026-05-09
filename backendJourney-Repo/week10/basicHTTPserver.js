//Basic HTTP Server - 
// Create a simple HTTP server that responds to requests with appropriate headers and status codes

const app = require(`express`)();
const PORT = 8080;

app.get(`/tshirt`, (req, res) => {
    res.status(200).send({ tshirt: "Cotton T-Shirt" , size: 'large'});
});

app.listen(
    PORT,
    () => console.log(`Server is running on http://localhost:${PORT}`)
)


