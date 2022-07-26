const router = require("express").Router();
const CampingSpot = require("../../models/maps/camping_spot");
const {add_camping_spot, search_radius, remove_spot} = require("./location/camp_geo");
const Event = require("../../models/events/Event");


router.post("/add", async (req, res, next) => {
        const campingSpot = new CampingSpot(req.body)
        CampingSpot.find({name: campingSpot.name}, async function (err, docs) {
            if (!docs.length) {
                await campingSpot.save();
                await add_camping_spot(campingSpot)
                res.status(200).json(campingSpot);
            } else {
                res.status(500).json(err);
            }
        });
    }
)

router.put("/:id", async (req, res) => {
        try {
            await CampingSpot.findByIdAndUpdate(
                req.params.id, {$set: req.body}, {new: true}
            );
            await remove_spot(req.params.id);
            const campingSpot = new CampingSpot(req.body);
            await add_camping_spot(campingSpot);
            res.status(200).json(req.body)
        } catch (err) {
            res.status(500).json(err);
        }
    }
)

router.delete("/:id", async (req, res) => {
    try {
        await CampingSpot.findByIdAndDelete(req.params.id)
        await remove_spot(req.params.id);
        res.status(200).json("Spot has been deleted.")
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/find/:id", async (req, res) => {
    try {
        const campingSpot = await CampingSpot.findById(req.params.id);
        res.status(200).json(campingSpot);
    } catch (err) {
        res.status(500).json(err)
    }
})


router.get("/findByName/:name", async (req, res) => {
    try {
        var name = req.params.name;
        const query = {name}
        const spot = await CampingSpot.findOne(query)
        res.status(200).json(spot)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/getSpotsByKey/:key', async (req, res) => {
    try {
        var key = req.params.key;
        const event = await CampingSpot.find({
            $or: [{
                category: {
                    $regex: key,
                    $options: 'i'
                }
            }, {
                address: {
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


router.get("/fetch", async (req, res) => {
        try {
            let campingSpots = await CampingSpot.find()
            res.status(200).json(campingSpots)
        } catch (err) {
            res.status(500).json(err)
        }
    }
)

router.get("/position_fetch/:lng/:lat/:radius",
    async (req, res) => {
        const pois = {}
        let campingSpots = await search_radius(req.params.lng, req.params.lat, req.params.radius)
        for (const id of campingSpots) {
            const contents = await CampingSpot.findById(id);
            console.log(contents);
            pois[id] = contents
        }
        res.status(200).json(pois)
    }
)

module.exports = router
