const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for frontend access
app.use(express.static("public")); // Serve frontend files

app.get("/data", (req, res) => {
    res.send("Hello from the server! This data was fetched asynchronously.");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});