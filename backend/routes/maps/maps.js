const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.sendFile("/mnt/d/cours ESPRIT/cours du soir/2CINFO1/PIDEV/pi-code-huntingkingdom/backend/views/map.html");
});

module.exports = router;
