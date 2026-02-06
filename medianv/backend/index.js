const express = require("express");
const cors = require("cors");
require("dotenv").config();

const databaseRoutes = require("./routes/database.routes");
// 👆 path must match your folder structure

const app = express();
const PORT = 5000;

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/database", databaseRoutes);

// health check (optional but useful)
app.get("/", (req, res) => {
  res.send("PostgreSQL DB Manager API is running ");
});

// start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
