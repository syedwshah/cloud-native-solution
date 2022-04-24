const express = require("express");

const router = express.Router();

router.get("/ping", (req, res, next) => {
  const msg = "Pinged Messaging API";
  console.log(msg);

  return res.status(200).json({
    success: true,
    message: msg,
  });
});

router.get("/sendgreeting", (req, res, next) => {
  const msg = "Sending greeting";
  console.log(msg);

  return res.status(200).json({
    success: true,
    greetingMessage: "Hello InterviewKickstart student",
  });
});

module.exports = router;
