const dotenv = require("dotenv");
dotenv.config({ path: require("path").join(__dirname, "../.env") });

const express = require("express");
const { port } = require("./config/env");
const webhookRouter = require("./routes/webhook");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "VoiceIQ is alive",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

app.use("/webhook", webhookRouter);

app.listen(port, () => {
  console.log(`VoiceIQ backend running on port ${port}`);
  console.log(`Health check: http://localhost:${port}/health`);
});

module.exports = app;
