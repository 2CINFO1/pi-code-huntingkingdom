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

module.exports.addEvent = function(newEvent, callback) {
    newEvent.save(callback);
}