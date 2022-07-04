const express = require('express');
const router = express.Router();
const { create } = require("../../models/user/User");
const verifyToken = require("../user/verifyToken");
const { verifyTokens, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../user/verifyToken")


const Tool = require('../../models/events/tools');
/* *******************************************************************************
 ******************************* Read Methods *************************************
 **********************************************************************************/

// Show tools *
router.get('/show', async(req, res, next) => {
    await Tool.find((err, tool) => {
        if (err) throw err;
        res.json(tool);
    });
});



// Show tools by status 
router.get('/show/:status', (req, res, next) => {
    var status = req.params.status;
    const query = {
        status
    }
    Tool.find(query, (err, tool) => {
        if (err) throw err;
        res.json(tool);
    });
});


// Show tools by id
router.get('/showtoolById/:id', (req, res, next) => {
    var id = req.params.id;
    Tool.findById(id, (err, tool) => {
        if (err) throw err;
        res.json(tool);
    });
});

// Show tools by name
router.get('/showTool/:name', (req, res, next) => {
    var name = req.params.name;
    const query = {
        name
    }
    Tool.find(query, (err, tool) => {
        if (err) throw err;
        res.json(tool);
    });

});

// Show tools by category
router.get('/showtoolByCategory/:category', (req, res, next) => {
    var category = req.params.category;
    const query = {
        category
    }
    Tool.find(query, (err, tool) => {
        if (err) throw err;
        res.json(tool);
    });
});

// Show tools by guid
router.get('/showtoolByGuide/:guide', (req, res, next) => {
    var guide = req.params.guide;
    const query = {
        guide
    }
    Tool.find(query, (err, tool) => {
        if (err) throw err;
        res.json(tool);
    });
});

// Show tools by key
router.get('/showtoolBykey/:key', (req, res, next) => {
    var key = req.params.key;


    Tool.find({
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
            tools: {
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
    }, function(err, tool) {
        if (err) throw err;
        res.json(tool);
    });
});

//create product

router.post("/add/", verifyTokens, async(req, res) => {
    const newstool = new tool(req.body)
    try {
        await newsTool.save((err, tool) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to add tool' + err.message });
            } else {
                res.json({ success: true, msg: 'tool Added' });
            }
        })
    } catch (err) {
        res.status(500).json(err.message)
    }
})


module.exports = router;