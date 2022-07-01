const express = require('express');
const router = express.Router();
const CampingSpot = require('../../models/maps/camping_spot');

router.get('/show', function (req, res, next) {
    CampingSpot.find(function (err, data) {
        if (err) throw err;
        res.json(data);
    });
});

module.exports = router;
