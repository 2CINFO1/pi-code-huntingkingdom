const express = require('express');
const router = express.Router();

const Event = require('../../models/events/Event');

// Show Events
router.get('/show', function(req, res, next) {
    Event.find(function(err, event) {
        if (err) throw err;
        res.json(event);
    });
});

// Show Events
router.get('/show/:status', function(req, res, next) {
    var status = req.params.status;
    Event.getEventByStatus(status, function(err, event) {
        if (err) throw err;
        res.json(event);
    });
});
// Show Events
router.get('/showEventById/:id', function(req, res, next) {
    var id = req.params.id;
    Event.getEventByID(id, function(err, event) {
        if (err) throw err;
        res.json(event);
    });
});

// Show Events
router.get('/showEvent/:name', function(req, res, next) {
    var name = req.params.name;
    Event.getEventByName(name, function(err, event) {
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
        tools: req.body.tools
    })

    Event.addEvent(newsEvent, (err, event) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to add event' + err.message });
        } else {
            res.json({ success: true, msg: 'Event Added' });
        }
    });
})



// update Events
router.post('/update', (req, res, next) => {
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
router.get('/delete/:id', (req, res, next) => {
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
router.get('/archive/:id', (req, res, next) => {
    var id = req.params.id;
    Event.archiveEvent(id, (err, event) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to archive event' + err.message });
        } else {
            res.json({ success: true, msg: 'Event archived' });
        }
    });
})

/*
// Archive Events
router.get('/archive', (req, res, next) => {
    var id = req.params.id;
    Event.archive((err) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to archive events' + err.message });
        } else {
            res.json({ success: true, msg: 'Event deleted' });
        }
    });
})
*/

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