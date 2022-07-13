const express = require('express');
const router = express.Router();
const { create } = require("../../models/user/User");
const verifyToken = require("../user/verifyToken");
const { verifyTokens, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../user/verifyToken")


const Post = require('../../models/events/Posts');
/* *******************************************************************************
 ******************************* Read Methods *************************************
 **********************************************************************************/

// Show Posts *
router.get('/show', async(req, res, next) => {
    await Post.find((err, Post) => {
        if (err) throw err;
        res.json(Post);
    });
});



// Show Posts by status 
router.get('/show/:status', (req, res, next) => {
    var status = req.params.status;
    const query = {
        status
    }
    Post.find(query, (err, Post) => {
        if (err) throw err;
        res.json(Post);
    });
});


// Show Posts by id
router.get('/showPostById/:id', (req, res, next) => {
    var id = req.params.id;
    Post.findById(id, (err, Post) => {
        if (err) throw err;
        res.json(Post);
    });
});

// Show Posts by name
router.get('/showPost/:name', (req, res, next) => {
    var name = req.params.name;
    const query = {
        name
    }
    Post.find(query, (err, Post) => {
        if (err) throw err;
        res.json(Post);
    });

});

// Show Posts by category
router.get('/showPostByCategory/:category', (req, res, next) => {
    var category = req.params.category;
    const query = {
        category
    }
    Post.find(query, (err, Post) => {
        if (err) throw err;
        res.json(Post);
    });
});

// Show Posts by guid
router.get('/showPostByGuide/:guide', (req, res, next) => {
    var guide = req.params.guide;
    const query = {
        guide
    }
    Post.find(query, (err, Post) => {
        if (err) throw err;
        res.json(Post);
    });
});

// Show Posts by key
router.get('/showPostBykey/:key', (req, res, next) => {
    var key = req.params.key;


    Post.find({
        $or: [{
            description: {
                $regex: key,
                $options: 'i'
            }
        }, {
            detail: {
                $regex: key,
                $options: 'i'
            }
        }, {
            Posts: {
                $regex: key,
                $options: 'i'
            }
        }, {
            guid: {
                $regex: key,
                $options: 'i'
            }
        }, {
            location: {
                $regex: key,
                $options: 'i'
            }
        }, {
            category: {
                $regex: key,
                $options: 'i'
            }
        }, {
            type: {
                $regex: key,
                $options: 'i'
            }
        }, {
            name: {
                $regex: key,
                $options: 'i'
            }
        }]
    }, function(err, Post) {
        if (err) throw err;
        res.json(Post);
    });
});

//create product

router.post("/add/", verifyTokens, async(req, res) => {
    const newsPost = new Post(req.body)
    try {
        await newsPost.save((err, Post) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to add Post' + err.message });
            } else {
                res.json({ success: true, msg: 'Post Added' });
            }
        })
    } catch (err) {
        res.status(500).json(err.message)
    }
})


module.exports = router;