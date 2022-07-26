var express = require('express');
var router = express.Router();
var Blog = require('../../models/blogs/blog');



//--------------show All blogs -------------------------------
router.get('/', (req, res, next) => {
    Blog.find(function (err, data) {
        if (err) throw err;
        res.json(data);
    });
});

//------------- add new blog ----------------------------
router.post('/add', async (req, res, next) => {
    const newBlog = new Blog(req.body);
    try {
        const savedBlog = await newBlog.save()
        res.status(200).json(savedBlog);

    } catch (err) {
        res.status(500).json(err)
    }

});


//--------------Search blog-------------------------------
router.get('/search/:id', async (req, res, next) => {
    var id = req.params.id
    Blog.findById(
        {_id: id},
        function (err, data) {
            if (err) throw err;

            else res.json(data);
        }
    );
});

//--------------Update blog-------------------------------
router.put("/:id", async (req, res) => {


        try {
            const updatedBlog = await Blog.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body
                },
                {new: true}
            );
            res.status(200).json("Your blog has been updated")
        } catch (err) {
            res.status(500).json(err);
        }

    }
)

//--------------Delete blog-------------------------------

router.delete("/:id", async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id)
        res.status(200).json("Post has been deleted ...")
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router;