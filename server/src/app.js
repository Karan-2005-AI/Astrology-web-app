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

/* ===========================
   Middleware
=========================== */

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
   API Status
=========================== */

app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    message: "AstroAI Backend Running 🚀",
  });
});

/* ===========================
   Serve React Build (Production)
=========================== */

if (process.env.NODE_ENV === "production") {
  const publicPath = path.join(__dirname, "../public");

  app.use(express.static(publicPath));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
  });
}

/* ===========================
   Export App
=========================== */

module.exports = app;