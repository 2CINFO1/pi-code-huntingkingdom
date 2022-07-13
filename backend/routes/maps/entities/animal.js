var express = require('express');
var router = express.Router();
var Animal = require('../../../models/maps/common/animal');

router.get('/', async (req, res, next) => {
    await Animal.find(function (err, data) {
        if (err) throw err;
        res.json(data);
    });
});

router.post('/add', async (req, res, next) => {
    const animal = new Animal(req.body);
    const animal_data = await animal.save()
    res.json(animal_data);
});


router.get('/:id', async (req, res, next) => {
    var id = req.params.id
    Animal.findById({_id: id}, function (err, data) {
            if (err) throw err;
            else res.json(data);
        }
    );
});

router.put("/:id", async (req, res) => {
    const animal = await Animal.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
    res.json(animal)
});

router.delete("/:id", async (req, res) => {
    await Animal.findByIdAndDelete(req.params.id)
    res.json("Animal has been deleted!")
});

module.exports = router;