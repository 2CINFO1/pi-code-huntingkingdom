const router = require("express").Router();
const HuntSpot = require("../../models/maps/hunt_spot");
const {add_camping_spot, remove_spot} = require("./location/camp_geo");

router.post("/add", async (req, res) => {
        const huntSpot = new HuntSpot(req.body)
        HuntSpot.find({name: huntSpot.name}, async function (err, docs) {
            if (!docs.length) {
                await huntSpot.save();
                await add_camping_spot(huntSpot)
                res.status(200).json(huntSpot);
            } else {
                res.status(500).json(err);
            }
        });
    }
)

router.put("/:id", async (req, res) => {
        try {
            await HuntSpot.findByIdAndUpdate(
                req.params.id, {$set: req.body}, {new: true}
            );
            await remove_spot(req.params.id);
            const huntSpot = new HuntSpot(req.body)
            await add_camping_spot(huntSpot);
            res.status(200).json(req.body)
        } catch (err) {
            res.status(500).json(err);
        }
    }
)

router.delete("/:id", async (req, res) => {
    try {
        await HuntSpot.findByIdAndDelete(req.params.id)
        res.status(200).json("Spot has been deleted.")
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/find/:id", async (req, res) => {
    try {
        const huntSpot = await HuntSpot.findById(req.params.id)
        res.status(200).json(huntSpot)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/fetch", async (req, res) => {
        try {
            let huntSpot = await HuntSpot.find()
            res.status(200).json(huntSpot)
        } catch (err) {
            res.status(500).json(err)
        }
    }
)

module.exports = router