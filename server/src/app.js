require("dotenv").config();

const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health.routes");
const astrologyRoutes = require("./routes/astrology.routes");
const birthRoutes = require("./routes/birth.routes");
const locationRoutes = require("./routes/location.routes");
const testRoutes = require("./routes/test.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", healthRoutes);
app.use("/api/astrology", astrologyRoutes);
app.use("/api/birth", birthRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/test", testRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AstroAI Backend Running 🚀",
  });
});

module.exports = app;