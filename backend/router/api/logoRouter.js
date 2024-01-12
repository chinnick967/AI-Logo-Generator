const router = require('express').Router();
const LogoController = require('../../controllers/LogoController');

router.post('/generate', LogoController.generateLogos);

module.exports = router;