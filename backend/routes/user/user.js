var express = require('express');
var router = express.Router();
var User = require('../../models/user/user');

/* show all contacts  */
router.get('/show', function (req, res, next) {
    User.find(function (err, data) {
        if (err) throw err;
        res.json(data);
    });
});

router.post('/addAction', function (req, res, next) { 
    var user = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        encry_password: req.body.encry_password,
        role: req.body.role
    });
    user.save();
    res.json(user);
});

router.get('/details/:id', function (req, res, next) {
    var id = req.params.id
    User.findById(
        { _id: id },
        function (err, data) {
            if (err) throw err;
            else res.json(data);
        }
    );
});

router.post('/updateAction', function (req, res, next) {
    var id = req.body.id;
    User.findById({ _id: id }, function (err, data) {
        data.name = req.body.name;
        data.lastname = req.body.lastname;
        data.email = req.body.email;
        data.encry_password = req.body.encry_password;
        data.role = req.body.role;
        data.save();
        res.json(data);
    });
});

router.get('/delete/:id', function (req, res, next) {
    var id = req.params.id;
    User.findOneAndDelete({ "_id": id }, function (err) {
        if (err) throw err;
        else res.json({
            'deleted': true
        })
    });
});

module.exports = router;
