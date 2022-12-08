const express = require('express');
const router = express.Router();
const { create } = require("../../models/user/User");
const verifyToken = require("../user/verifyToken");
const { verifyTokens, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../user/verifyToken")
const multer = require('multer')
const uuid = require('uuid').v4
const path = require('path')

const Post = require('../../models/Posts/Posts');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const id = uuid();
        const filePath = `images/${id}${ext}`
        cb(null, filePath);
    }
})

var upload = multer({ storage })

/********* Implented Tested Methods ******
 * /show
 * /show/:status
 * /showPostById/:id
 * /showPost/:name
 * /showPostByCategory/:category
 * /showPostByGuide/:guid
 * /showPostBykey/:key
 * /showPostByGuide/:guid
 * 
 **********************/

/********* TO_DO ******
 * 
 **********************/


/* *******************************************************************************
 ******************************* Read Methods *************************************
 **********************************************************************************/




router.get("/show", async(req, res) => {
    try {
        const Post = await Post.find()

        res.status(200).json(Post)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Show Posts by status 
router.get("/show/:status", async(req, res) => {
    try {
        var status = req.params.status;
        const query = {
            status
        }
        const Post = await Post.find(query)
        res.status(200).json(Post)
    } catch (err) {
        res.status(500).json(err)
    }
})


// Show Posts by id 
router.get("/showPostById/:id", async(req, res) => {
    try {
        var id = req.params.id;
        const Post = await Post.findById(id)
        res.status(200).json(Post)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Show Posts by status 
router.get("/showPost/:name", async(req, res) => {
    try {
        var name = req.params.name;
        const query = {
            name
        }
        const Post = await Post.findOne(query)
        res.status(200).json(Post)
    } catch (err) {
        res.status(500).json(err)
    }
})


// Show Posts by category 
router.get("/showPostByCategory/:category", async(req, res) => {
    try {
        var category = req.params.category;
        const query = {
            category
        }
        const Post = await Post.find(query)
        res.status(200).json(Post)
    } catch (err) {
        res.status(500).json(err)
    }
})


// Show Posts by category 
router.get("/showPostByGuide/:guid", async(req, res) => {
    try {
        var guid = req.params.guid;
        const query = {
            guid
        }
        const Post = await Post.find(query)
        res.status(200).json(Post)
    } catch (err) {
        res.status(500).json(err)
    }
})


// Show Posts by key
router.get('/showPostBykey/:key', async(req, res) => {
    try {
        var key = req.params.key;
        const Post = await Post.find({
            $or: [{
                headlineheadline: {
                    $regex: key,
                    $options: 'i'
                }
            }, {
                author: {
                    $regex: key,
                    $options: 'i'
                }
            }, {
                context: {
                    $regex: key,
                    $options: 'i'
                }
            }]
        });
        res.status(200).json(Post)
    } catch (err) {
        res.status(500).json(err)
    }
});


router.post('/uploadFiles', upload.array('media'), (req, res) => {
    return res.json({ status: 'OK', uploaded: req.files.length })
})

router.post('/uploadCoverImage/:id', (req, res, next) => {
    upload.single("file")(req, res, function(err) {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            res.json({ success: true, message: "Photo was updated !" });

        }
        var id = req.params.id;
        Post.findById({ _id: id }, function(err, Post) {
            Post.coverImagePath = req.file.filename;
            Post.save();
        });
    });
});


// Archive Posts
router.delete('/archive', (req, res, next) => {

    try {
        var counter = 0;
        var status = "OFFF";
        const query = {
            status
        }
        var Posts = Post.find(query);
        console.log(Posts)

        for (var element in Posts) {
            // console.log(Post)
            counter++;
            // Post.update({ _id: Post._id }, { "$set": { "status": "ARCH" } });

        };

        console.log(counter)

    } catch (err) {
        res.json({ status: 500, success: false, message: err.message });

    }
})

//create Post

router.post("/add/", (req, res) => {
    const newsPost = new Post(req.body)
    try {
        newsPost.save((err, Post) => {
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

// Delete Posts
router.delete("/delete/:id", async(req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.json({ success: true, msg: 'Post deleted' });
    } catch (err) {
        res.json({ success: false, msg: 'Failed to delete Post' + err.message });
    }
})

router.put("/update/:id", async(req, res) => {
    try {
        await Post.findByIdAndUpdate(
            req.params.id, { $set: req.body }, { new: true }
        );
        res.status(200).json(req.body)
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;