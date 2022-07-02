const express = require('express');
const router = express.Router();

const Event = require('../../models/events/Event');
/* *******************************************************************************
 ******************************* Read Methods *************************************
 **********************************************************************************/

// Show events *
router.get('/show', (req, res, next) => {
    Event.find((err, event) => {
        if (err) throw err;
        res.json(event);
    });
});

// Show events by status 
router.get('/show/:status', (req, res, next) => {
    var status = req.params.status;
    const query = {
        status
    }
    Event.find(query, (err, event) => {
        if (err) throw err;
        res.json(event);
    });
});


// Show events by id
router.get('/showEventById/:id', (req, res, next) => {
    var id = req.params.id;
    Event.findById(id, (err, event) => {
        if (err) throw err;
        res.json(event);
    });
});

// Show events by name
router.get('/showEvent/:name', (req, res, next) => {
    var name = req.params.name;
    const query = {
        name
    }
    Event.find(query, (err, event) => {
        if (err) throw err;
        res.json(event);
    });

});

// Show events by category
router.get('/showEventByCategory/:category', (req, res, next) => {
    var category = req.params.category;
    const query = {
        category
    }
    Event.find(query, (err, event) => {
        if (err) throw err;
        res.json(event);
    });
});

// Show events by guid
router.get('/showEventByGuide/:guide', (req, res, next) => {
    var guide = req.params.guide;
    const query = {
        guide
    }
    Event.find(query, (err, event) => {
        if (err) throw err;
        res.json(event);
    });
});

// Show events by key
router.get('/showEventBykey/:key', (req, res, next) => {
    var key = req.params.key;


    Event.find({
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
    }, function(err, event) {
        if (err) throw err;
        res.json(event);
    });
});

// Add Events
router.post('/add', (req, res, next) => {
    var newsEvent = new Event({
        name: req.body.name,
        type: req.body.type,
        category: req.body.category,
        description: req.body.description,
        detail: req.body.detail,
        location: req.body.location,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        guid: req.body.guid,
        tools: req.body.tools,
        user: req.body.user.id
    })

    //newEvent.save(callback);
    Event.addEvent(newsEvent, (err, event) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to add event' + err.message });
        } else {
            res.json({ success: true, msg: 'Event Added' });
        }
    });
})

/*

router.post('/addPosition', function(req, res, next) {
    var position = new Position({
        user_id: req.body.user_id,
        position_type: req.body.position_type,
        lat: req.body.lat,
        lng: req.body.lng,
    });
    position.save();
    res.json(position)
});

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