var express = require('express');
var router = express.Router();
var Blog = require('../models/blogs/blog');

/* show all blogs  */
router.get('/show', function (req, res, next) {
    Blog.find(function (err, data) {
        if (err) throw err;
        // res.json(data);
        res.render("show.twig", { data });
    });
});

// add action
router.post('/add', function (req, res, next) {
    // res.json(req.body); 
    var blog = new Blog({
        fullName: req.body.fullName,
        title: req.body.title,
        img: req.body.img,
        description: req.body.description,
        category: req.body.category,

    });
    blog.save();
    // res.redirect("./show"); // sera actualisé automatiquement
});

/* modify produit */
router.get('/details/:id', function (req, res, next) {
    var id = req.params.id
    Blog.findById(
        { _id: id },
        function (err, data) {
            if (err) throw err;

            console.log(data);
            // res.render('modify.twig', { data });
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
    });
    // res.redirect('./show')
});

router.get('/delete/:id', function (req, res, next) {
    var id = req.params.id;
    Blog.findOneAndDelete({ "_id": id }, function (err) {
        if (err) throw err;
    });
    res.redirect("/blog/show");
});

module.exports = router;