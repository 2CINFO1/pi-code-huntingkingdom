const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Tool Schema 

const ToolSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    eventsType: {
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
    details: {
        publisher: {
            type: String
        },
        Color: {
            type: String
        },
        Length: {
            type: Number
        },
        Diameter: {
            type: String
        },
        Weight: {
            type: String
        },
        maxDivingDepth: {
            type: String
        },
        Finish: {
            type: String
        },
        Waterproof: {
            type: Boolean
        },
        powerVariability: {
            type: Boolean
        },
        minimumPower: {
            type: Number
        },
        maximumPower: {
            type: Number
        },
        FastFocus: {
            type: String
        },
        LensCoating: {
            type: String
        },
        Warranty: {
            type: String
        },
        RingsIncluded: {
            type: Boolean
        },
        SunShadeIncluded: {
            type: Boolean
        },
        LensCoversIncluded: {
            type: Boolean
        },
        ReticleConstruction: {
            type: Boolean
        },
        IlluminatedReticle: {
            type: Boolean
        },
        HoldoverReticle: {
            type: String
        },
        FogProof: {
            type: Boolean
        },
        ShockProof: {
            type: Boolean
        }
    },
    availablity: {
        type: Boolean,
        required: true
    },
    availablityInShop: {
        type: Boolean,
        required: true
    },
    status: {
        type: String,
        enum: ['OPER', 'OFFF', 'STUD', 'ARCH'],
        default: 'OPER'
    }
    /*,
        proprietor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }*/
}, {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
});

const Tool = module.exports = mongoose.model('Tool', ToolSchema);