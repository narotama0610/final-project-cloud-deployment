const express = require("express");
const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.json({
    message: "Backend API running",
    status: "success"
  });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}/api`);
});
