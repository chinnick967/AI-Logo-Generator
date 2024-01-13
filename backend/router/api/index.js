const router = require('express').Router();
router.use('/logos', require('./logoRouter'));

module.exports = router;