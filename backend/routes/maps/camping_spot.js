const router = require("express").Router();
const CampingSpot = require("../../models/maps/camping_spot");
const add_camping_spot = require("./location/geo");



router.post("/add", async (req, res) => {
        const campingSpot = new CampingSpot(req.body)
        // await campingSpot.save()
        await add_camping_spot(campingSpot)
        res.status(200).json(campingSpot);
    }
)

router.put("/:id", async (req, res) => {
        try {
            await CampingSpot.findByIdAndUpdate(
                req.params.id, {$set: req.body}, {new: true}
            );
            res.status(200).json(req.body)
        } catch (err) {
            res.status(500).json(err);
        }
    }
)

router.delete("/:id", async (req, res) => {
    try {
        await CampingSpot.findByIdAndDelete(req.params.id)
        res.status(200).json("Spot has been deleted.")
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/find/:id", async (req, res) => {
    try {
        const campingSpot = await CampingSpot.findById(req.params.id);
        geo.location(req.params.id, async function (err, location) {
            if (err) console.error(err)
            else console.log(`Location for ${req.params.id} is:`, location.latitude, location.longitude)
        })
        res.status(200).json(campingSpot);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/fetch", async (req, res) => {
        try {
            let campingSpots = await CampingSpot.find()
            res.status(200).json(campingSpots)
        } catch (err) {
            res.status(500).json(err)
        }
    }
)

module.exports = router