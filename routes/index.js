const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
  res.send('Sarah Birch');
});

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

module.exports = router;
