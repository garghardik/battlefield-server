const express = require('express');
const router = express.Router();
const data = require("./utils");
// Example route
router.get('/server-settings', (req, res) => {    
  res.json(data.battlefieldData);
});

module.exports = router;
