const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get list of all users.');
});

module.exports = router;
