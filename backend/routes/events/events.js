const express = require('express');
const router = express.Router();

const Event = require('../../models/events/Event');

// get
router.get('/', (req, res, next) => {
    res.send('event');
})

// post
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
            res.json({ success: false, msg: 'Failed to add event' });
        } else {
            res.json({ success: true, msg: 'Event Added' });
        }
    });
})

module.exports = router;