require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const healthRoutes = require("./routes/health.routes");
const astrologyRoutes = require("./routes/astrology.routes");
const birthRoutes = require("./routes/birth.routes");
const locationRoutes = require("./routes/location.routes");
const testRoutes = require("./routes/test.routes");

const app = express();

app.use(cors());
app.use(express.json());

/* ===========================
   API Routes
=========================== */

app.use("/api", healthRoutes);
app.use("/api/astrology", astrologyRoutes);
app.use("/api/birth", birthRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/test", testRoutes);

/* ===========================
   Development Route
=========================== */

app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    message: "AstroAI Backend Running 🚀",
  });
});

/* ===========================
   Production (React Build)
=========================== */

if (process.env.NODE_ENV === "production") {
  const clientPath = path.join(__dirname, "../../client/dist");

  app.use(express.static(clientPath));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(clientPath, "index.html"));
  });
}

/* ===========================
   Export App
=========================== */

module.exports = app;