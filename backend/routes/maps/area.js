const router = require("express").Router();
const Area = require("../../models/maps/area");

router.post("/add", async (req, res) => {
        const area = new Area(req.body)
        try {
            await area.save()
            res.status(200).json(area);
        } catch (err) {
            res.status(500).json(err)
        }
    }
)

router.put("/:id", async (req, res) => {
        try {
            await Area.findByIdAndUpdate(
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
        await Area.findByIdAndDelete(req.params.id)
        res.status(200).json("Spot has been deleted.")
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/find/:id", async (req, res) => {
    try {
        const area = await Area.findById(req.params.id)
        res.status(200).json(area)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/fetch", async (req, res) => {
        try {
            let area = await Area.find()
            res.status(200).json(area)
        } catch (err) {
            res.status(500).json(err)
        }
    }
)

module.exports = router