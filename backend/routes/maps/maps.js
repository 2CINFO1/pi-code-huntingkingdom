var express = require('express');
var router = express.Router();
var Position = require('../../models/maps/maps');

router.get('/show', function (req, res, next) {
    Position.find(function (err, data) {
        if (err) throw err;
        res.json(data);
    });
});

router.post('/addPosition', function (req, res, next) {
    var position = new Position({
        user_id: req.body.user_id,
        position_type: req.body.position_type,
        lat: req.body.lat,
        lng: req.body.lng,
    });
    position.save();
    res.json(position)
});

router.post('/updatePosition', function (req, res, next) {
    var id = req.body.id;
    Position.findById({ _id: id }, function (err, data) {
        data.user_id = req.body.user_id;
        data.position_type = req.body.position_type;
        data.lat = req.body.lat;
        data.lng = req.body.lng;
        data.save();
        res.json(data)
    });
});

router.get('/delete/:id', function (req, res, next) {
    var id = req.params.id;
    Position.findOneAndDelete({ "_id": id }, function (err) {
        if (err) throw err;
        else res.json({"deleted": true});
    });
});

module.exports = router;
