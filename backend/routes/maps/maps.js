const express = require('express');
const router = express.Router();
const CampingSpot = require('../../models/maps/camping_spot');

router.get('/', function (req, res, next) {
    res.render('map.twig');
});

module.exports = router;
