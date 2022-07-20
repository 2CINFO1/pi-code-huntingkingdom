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
    status: {
        type: String,
        enum: ['OPER', 'OFFF', 'STUD', 'ARCH'],
        default: 'OPER'
    },
    maxmumbers: {
        type: Number
    },
    /*
    guid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    tools: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tool'
    }],
     creationUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    participant: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    interested: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    */
    coverImagePath: {
        type: String
    }
}, {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
});




module.exports.updateEvent = function(newEvent, id, callback) {
    this.getEventByID(id, (err, event) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to find event' });
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


const Event = module.exports = mongoose.model('Event', EventSchema);