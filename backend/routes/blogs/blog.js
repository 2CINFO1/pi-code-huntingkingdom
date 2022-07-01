var express = require('express');
var router = express.Router();
var Blog = require('../../models/blogs/blog');

router.get('/show', function (req, res, next) {
    Blog.find(function (err, data) {
        if (err) throw err;
        res.json(data);
    });
});

// add action
router.post('/add', function (req, res, next) {
    var blog = new Blog({
        fullName: req.body.fullName,
        title: req.body.title,
        img: req.body.img,
        description: req.body.description,
        category: req.body.category,
    });
    blog.save();
    res.json(blog);
});

/* modify produit */
router.get('/details/:id', function (req, res, next) {
    var id = req.params.id
    Blog.findById(
        { _id: id },
        function (err, data) {
            if (err) throw err;

            else res.json(data);
        }
    );
});

router.post('/updateAction', function (req, res, next) {
    var id = req.body.id;
    Blog.findById({ _id: id }, function (err, data) {
        data.fullName = req.body.fullName;
        data.title = req.body.title;
        data.img = req.body.img;
        data.description = req.body.description;
        data.category = req.body.category;
        data.save();
        res.json(data);
    });
});

router.get('/delete/:id', function (req, res, next) {
    var id = req.params.id;
    Blog.findOneAndDelete({ "_id": id }, function (err) {
        if (err) throw err;
        res.json({
            "deleted": true
        });
    });
});

module.exports = router;