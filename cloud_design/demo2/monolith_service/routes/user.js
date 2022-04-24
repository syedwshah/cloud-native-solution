const express = require("express");

const router = express.Router();

router.get("/ping", (req, res, next) => {
  const msg = "Pinged User API";
  console.log(msg);

  return res.status(200).json({
    success: true,
    message: msg,
  });
});

router.get("/info", (req, res, next) => {
  console.log("Getting user info");

  return res.status(200).json({
    success: true,
    data: {
      name: "Patrick Korianski",
      favColor: "blue",
      job: "Software Engineer",
    },
  });
});

module.exports = router;
