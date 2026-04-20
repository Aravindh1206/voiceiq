const express = require("express");
const router = express.Router();
const { webhookSecret } = require("../config/env");

router.post("/ivr", (req, res) => {
  const secret = req.headers["x-voiceiq-secret"];

  if (secret !== webhookSecret) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { userInput, sessionId, callerId } = req.body;

  console.log("--- Incoming call ---");
  console.log("Session:", sessionId);
  console.log("Caller:", callerId);
  console.log("Input:", userInput);

  res.json({
    message: `VoiceIQ received your message: "${userInput}". AI response coming in Month 2!`,
    sessionId: sessionId,
  });
});

module.exports = router;
