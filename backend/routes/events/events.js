const express = require('express');
const router = express.Router();
const { create } = require("../../models/user/User");
const verifyToken = require("../user/verifyToken");
const { verifyTokens, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../user/verifyToken")
const multer = require('multer')
const uuid = require('uuid').v4
const path = require('path')

const Event = require('../../models/events/Event');

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
 * /showEventById/:id
 * /showEvent/:name
 * /showEventByCategory/:category
 * /showEventByGuide/:guid
 * /showEventBykey/:key
 * /showEventByGuide/:guid
 * 
 **********************/

/********* TO_DO ******
 * FindByDates
 * FindbyUser
 * FindByConnectedUser
 * AddTokenVerification
 * 
 **********************/


/* *******************************************************************************
 ******************************* Read Methods *************************************
 **********************************************************************************/

// // Show events *
// router.get('/show', async(req, res, next) => {
//     await Event.find((err, event) => {
//         if (err) throw err;
//         res.json(event);
//     });
// });


router.get("/show", async(req, res) => {
    try {
        const event = await Event.find()

        res.status(200).json(event)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Show events by status 
router.get("/show/:status", async(req, res) => {
    try {
        var status = req.params.status;
        const query = {
            status
        }
        const event = await Event.find(query)
        res.status(200).json(event)
    } catch (err) {
        res.status(500).json(err)
    }
})


// Show events by id 
router.get("/showEventById/:id", async(req, res) => {
    try {
        var id = req.params.id;
        const event = await Event.findById(id)
        res.status(200).json(event)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Show events by status 
router.get("/showEvent/:name", async(req, res) => {
    try {
        var name = req.params.name;
        const query = {
            name
        }
        const event = await Event.findOne(query)
        res.status(200).json(event)
    } catch (err) {
        res.status(500).json(err)
    }
})


// Show events by category 
router.get("/showEventByCategory/:category", async(req, res) => {
    try {
        var category = req.params.category;
        const query = {
            category
        }
        const event = await Event.find(query)
        res.status(200).json(event)
    } catch (err) {
        res.status(500).json(err)
    }
})


// Show events by category 
router.get("/showEventByGuide/:guid", async(req, res) => {
    try {
        var guid = req.params.guid;
        const query = {
            guid
        }
        const event = await Event.find(query)
        res.status(200).json(event)
    } catch (err) {
        res.status(500).json(err)
    }
})


// Show events by key
router.get('/showEventBykey/:key', async(req, res) => {
    try {
        var key = req.params.key;
        const event = await Event.find({
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
        });
        res.status(200).json(event)
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
        Event.findById({ _id: id }, function(err, event) {
            event.coverImagePath = req.file.filename;
            event.save();
        });
    });
});


/*
// Show events by category 
router.get("/showEventByDate", async(req, res) => {
    var startDate = req.body.date;
    var endDate = req.body.endDate;
    try {

        const event = await Event.find({ //query today up to tonight
            created_on: {
                $gte: new Date(startDate),
                $lt: new Date(endDate)
            }
        })
        res.status(200).json(event)
    } catch (err) {
        res.status(500).json(err)
    }
})
*/


/*

//create product

router.post("/add/", verifyTokens, async(req, res) => {
    const newsEvent = new Event(req.body)
    try {
        await newsEvent.save((err, event) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to add event' + err.message });
            } else {
                res.json({ success: true, msg: 'Event Added' });
            }
        })
    } catch (err) {
        res.status(500).json(err.message)
    }
})




router.post('/updatePosition', function(req, res, next) {
    var id = req.body.id;
    Position.findById({ _id: id }, function(err, data) {
        data.user_id = req.body.user_id;
        data.position_type = req.body.position_type;
        data.lat = req.body.lat;
        data.lng = req.body.lng;
        data.save();
        res.json(data)
    });
});

router.get('/delete/:id', function(req, res, next) {
    var id = req.params.id;
    Position.findOneAndDelete({ "_id": id }, function(err) {
        if (err) throw err;
        else res.json({ "deleted": true });
    });
});




// update Events
router.put('/update', (req, res, next) => {
    var id = req.body.id;
    var newsEvent = new Event({
        type: req.body.type,
        category: req.body.category,
        description: req.body.description,
        detail: req.body.detail,
        location: req.body.location,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        guid: req.body.guid,
        tools: req.body.tools
    })

    Event.updateEvent(newsEvent, id, (err, event) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to update event' + err.message });
        } else {
            res.json({ success: true, msg: 'Event Updated' });
        }
    });
})



// Delete Events
router.delete('/delete/:id', (req, res, next) => {
    var id = req.params.id;
    Event.deleteEvent(id, (err, event) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to delete event' + err.message });
        } else {
            res.json({ success: true, msg: 'Event deleted' });
        }
    });
})


// Archive Events
router.delete('/archive/:id', (req, res, next) => {
    var id = req.params.id;
    Event.archiveEvent(id, (err, event) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to archive event' + err.message });
        } else {
            res.json({ success: true, msg: 'Event archived' });
        }
    });
})


// Archive Events
router.delete('/finalArchive/:id', (req, res, next) => {
    var id = req.params.id;
    Event.findByIdAndDelete(id, (err) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to archive events' + err.message });
        } else {
            res.json({ success: true, msg: 'Event difenetly definitely from the DB' });
        }
    });
})


// Delete Event : TO-DO : Delete after Archive 
/* 
router.get('/delete/:id', function(req, res, next) {
    var id = req.params.id;
    Event.deleteEventForArchive(id, (err, event) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to delete event' + err.message });
        } else {
            res.json({ success: true, msg: 'Event deleted' });
        }
    });
});
*/
module.exports = router;