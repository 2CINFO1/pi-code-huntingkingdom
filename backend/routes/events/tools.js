const express = require('express');
const router = express.Router();
const { create } = require("../../models/user/User");
const verifyToken = require("../user/verifyToken");
const { verifyTokens, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../user/verifyToken")
const multer = require('multer')
const uuid = require('uuid').v4
const path = require('path')

const Tool = require('../../models/events/tools');

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
 * /showToolById/:id
 * /showTool/:name
 * /showToolByCategory/:category
 * /showToolByGuide/:guid
 * /showToolBykey/:key
 * /showToolByGuide/:guid
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
        const Tool = await Tool.find()

        res.status(200).json(Tool)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Show Tools by status 
router.get("/show/:status", async(req, res) => {
    try {
        var status = req.params.status;
        const query = {
            status
        }
        const Tool = await Tool.find(query)
        res.status(200).json(Tool)
    } catch (err) {
        res.status(500).json(err)
    }
})


// Show Tools by id 
router.get("/showToolById/:id", async(req, res) => {
    try {
        var id = req.params.id;
        const Tool = await Tool.findById(id)
        res.status(200).json(Tool)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Show Tools by status 
router.get("/showTool/:name", async(req, res) => {
    try {
        var name = req.params.name;
        const query = {
            name
        }
        const Tool = await Tool.findOne(query)
        res.status(200).json(Tool)
    } catch (err) {
        res.status(500).json(err)
    }
})


// Show Tools by category 
router.get("/showToolByCategory/:category", async(req, res) => {
    try {
        var category = req.params.category;
        const query = {
            category
        }
        const Tool = await Tool.find(query)
        res.status(200).json(Tool)
    } catch (err) {
        res.status(500).json(err)
    }
})


// Show Tools by category 
router.get("/showToolByGuide/:guid", async(req, res) => {
    try {
        var guid = req.params.guid;
        const query = {
            guid
        }
        const Tool = await Tool.find(query)
        res.status(200).json(Tool)
    } catch (err) {
        res.status(500).json(err)
    }
})


// Show Tools by key
router.get('/showToolBykey/:key', async(req, res) => {
    try {
        var key = req.params.key;
        const Tool = await Tool.find({
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
        res.status(200).json(Tool)
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
        Tool.findById({ _id: id }, function(err, Tool) {
            Tool.coverImagePath = req.file.filename;
            Tool.save();
        });
    });
});


// Archive Tools
router.delete('/archive', (req, res, next) => {

    try {
        var counter = 0;
        var status = "OFFF";
        const query = {
            status
        }
        var Tools = Tool.find(query);
        console.log(Tools)

        for (var element in Tools) {
            // console.log(Tool)
            counter++;
            // Tool.update({ _id: Tool._id }, { "$set": { "status": "ARCH" } });

        };

        console.log(counter)

    } catch (err) {
        res.json({ status: 500, success: false, message: err.message });

    }
})

//create Tool

router.post("/add/", (req, res) => {
    const newsTool = new Tool(req.body)
    try {
        newsTool.save((err, Tool) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to add Tool' + err.message });
            } else {
                res.json({ success: true, msg: 'Tool Added' });
            }
        })
    } catch (err) {
        res.status(500).json(err.message)
    }
})

// Delete Tools
router.delete("/delete/:id", async(req, res) => {
    try {
        await Tool.findByIdAndDelete(req.params.id)
        res.json({ success: true, msg: 'Tool deleted' });
    } catch (err) {
        res.json({ success: false, msg: 'Failed to delete Tool' + err.message });
    }
})

router.put("/update/:id", async(req, res) => {
    try {
        await Tool.findByIdAndUpdate(
            req.params.id, { $set: req.body }, { new: true }
        );
        res.status(200).json(req.body)
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;