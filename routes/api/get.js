const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ success: "get test route works" });
});

module.exports = router;
