const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON requests

// 🛤️ Home Route
app.get("/", (req, res) => {
    res.send("Welcome to the Home Page!");
});

// 🛤️ Dynamic Route: User Profile
app.get("/user/:name", (req, res) => {
    const userName = req.params.name;
    res.send(`Hello, ${userName}! Welcome to your profile.`);
});

// 🛤️ Dynamic Route: Product Details
app.get("/product/:id", (req, res) => {
    const productId = req.params.id;
    res.send(`Product ID: ${productId} - Details will be shown here.`);
});

// 🛤️ Catch-All Route (404)
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

// Start the Server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/");
});