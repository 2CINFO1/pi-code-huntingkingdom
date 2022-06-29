const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// event Schema 

const EventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    detail: {
        type: String
    },
    location: {
        type: String
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    guid: {
        type: String
    },
    tools: {
        type: String
    },
    status: {
        type: String,
        enum: ['OPER', 'OFFF', 'STUD', 'ARCH'],
        default: 'OPER'
    },
    maxmumbers: {
        type: Number
    }
}, {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
});

const Event = module.exports = mongoose.model('Event', EventSchema);

module.exports.getEventByID = function(id, callback) {
    Event.findById(id, callback);
}

module.exports.getEventByName = function(name, callback) {
    const query = {
        name
    }
    Event.findOne(query, callback);
}

module.exports.getEventByStatus = function(status, callback) {
    const query = {
        status
    }
    Event.find(query, callback);
}

module.exports.addEvent = function(newEvent, callback) {
    newEvent.save(callback);
}

module.exports.updateEvent = function(newEvent, id, callback) {
    this.getEventByID(id, (err, event) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to find event' });
        } else {
            if ((event.status = 'OFFF') || (event.status = 'ARCH')) {
                res.json({ success: false, msg: 'Not allowed to update event' });
            } else {

                event.type = newEvent.type;
                event.category = newEvent.category;
                event.description = newEvent.description;
                event.detail = newEvent.detail;
                event.location = newEvent.location;
                event.startDate = newEvent.startDate;
                event.endDate = newEvent.endDate;
                event.guid = newEvent.guid;
                event.tools = newEvent.tools;
                event.save(callback);
            }
        }

    });

}


module.exports.deleteEvent = function(id, callback) {
    this.getEventByID(id, (err, event) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to find event' });
        } else {
            event.status = 'OFFF';
            event.save(callback);
        }

    });

}


module.exports.archiveEvent = function(id, callback) {
    this.getEventByID(id, (err, event) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to find event' });
        } else {
            event.status = 'ARCH';
            event.save(callback);

        }

    });

}

/*
module.exports.archiveEvent = function(id, callback) {
        this.getEventByID(id, (err, event) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to find event' });
            } else {
                if (event.status = "OPER")
                    res.json({ success: false, msg: 'Not allowed to archive event' });
                else if (event.status = "ARCH")
                    res.json({ success: false, msg: 'event already archived' });
                else {
                    event.status = "ARCH";
                    event.save(callback);
                }
            }
        });

    }
    
    // Method used only after archive
    // to-do : develop archive method 
    module.exports.archive = function(id, callback) {
        this.getEventByStatus("ARCH"), (err, event) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to find event' });
            } else {
                event.status = 'ARCH';
                event.save(callback);
            }
         event.findAndDelete(id, callback);

        }
    }
    */