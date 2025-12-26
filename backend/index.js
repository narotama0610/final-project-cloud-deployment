const express = require("express");
const app = express();
const port = 5000;

app.get("/api", (req, res) => {
  res.json({
    message: "Backend API running",
    status: "success"
  });
});

app.get("/", (req, res) => {
  res.send("Backend API is running on GCP VM 🚀");
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}/api`);
});
