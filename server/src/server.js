const app = require("./app");

const { PORT } = require("./config/env");

app.listen(PORT, () => {
  console.log("==================================");
  console.log(`🚀 AstroAI Server Running`);
  console.log(`🌐 http://localhost:${PORT}`);
  console.log("==================================");
});