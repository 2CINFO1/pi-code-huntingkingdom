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
    console.log(req)
    upload.single("file")(req, res, function(err) {
        if (err) {
            res.json({ success: false, message: err.msg });
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



// Archive Events
router.delete('/archive', (req, res, next) => {

    try {
        var counter = 0;
        var status = "OFFF";
        const query = {
            status
        }
        var events = Event.find(query);
        console.log(events)

        for (var element in events) {
            // console.log(event)
            counter++;
            // event.update({ _id: event._id }, { "$set": { "status": "ARCH" } });

        };

        console.log(counter)

    } catch (err) {
        res.json({ status: 500, success: false, message: err.message });

    }
})

//create Event

router.post("/add", (req, res) => {
    const newsEvent = new Event(req.body)
    try {
        newsEvent.save((err, event) => {
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

// Delete Events
router.delete("/delete/:id", async(req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id)
        res.json({ success: true, msg: 'Event deleted' });
    } catch (err) {
        res.json({ success: false, msg: 'Failed to delete event' + err.message });
    }
})

router.put("/update/:id", async(req, res) => {
    try {
        await Event.findByIdAndUpdate(
            req.params.id, { $set: req.body }, { new: true }
        );
        res.status(200).json(req.body)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put("/addInterested/:id", async(req, res) => {
    try {
        var id = req.params.id;
        Event.findById({ _id: id }, function(err, event) {
            event.interestedNumber = event.interestedNumber + 1;
            event.save();
        });
        res.status(200).json(req.body)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put("/addParticipant/:id", async(req, res) => {
    var id = req.params.id;
    Event.findById({ _id: id }, function(err, event) {
        if ((event.participantNumber + 1) > event.maxmumbers) {
            res.json({ success: false, msg: 'Nombre maximum des participant atteint' });
        } else {
            event.participantNumber = event.participantNumber + 1;
            event.save();
            res.status(200).json(req.body)

        }
    });

})



router.put("/removeInterested/:id", async(req, res) => {
    try {
        var id = req.params.id;
        Event.findById({ _id: id }, function(err, event) {
            event.interestedNumber = event.interestedNumber - 1;
            event.save();
        });
        res.status(200).json(req.body)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put("/removeParticipant/:id", async(req, res) => {
    try {
        var id = req.params.id;
        Event.findById({ _id: id }, function(err, event) {
            event.participantNumber = event.participantNumber - 1;
            event.save();
        });
        res.status(200).json(req.body)
    } catch (err) {
        res.status(500).json(err);
    }
})


router.get("/getImage/:folderName/:image_name", (req, res) => {
    const folder_name = req.params.folderName;
    const img_name = req.params.image_name;

    res.sendFile(path.join(__dirname, `../../public/${folder_name}/${img_name}`))
})


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