const express = require("express");
const router = express.Router();

const oauth = require("../models/forge-auth");

router.get("/token", (req, res) => {
  const forgeOAuth = oauth.getCredentials("public");

  forgeOAuth
    .authenticate()
    .then((credentials) => {
      console.log(credentials);
      res.json(credentials);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
