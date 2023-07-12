const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Forge App", contents: "Welcome to Forge App" });
  // index => (views folder -> index.ejs)
});

module.exports = router;
