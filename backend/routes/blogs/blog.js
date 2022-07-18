var express = require("express");
var router = express.Router();
var Blog = require("../../models/blogs/blog");
const {
  verifyTokens,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("../user/verifyToken");

//--------------show All blogs -------------------------------
router.get("/", async (req, res, next) => {
  await Blog.find(function (err, data) {
    if (err) throw err;
    res.json(data);
  });
});

//------------- add new blog ----------------------------

router.post("/addBlog", async (req, res) => {
  // Check if blog title was provided
  if (!req.body.title) {
    res.json({ success: false, message: "Blog title is required." });
  } else {
    if (!req.body.body) {
      res.json({ success: false, message: "Blog text is required." });
    } else {
      const blog = new Blog({
        title: req.body.title,
        description: req.body.description,
        img: req.body.img,
        body: req.body.body,
        createdBy: req.body.createdBy,
      });

      blog.save((err) => {
        if (err) {
          if (err.errors) {
            if (err.errors.title) {
              res.json({ success: false, message: err.errors.title.message });
            } else {
              if (err.errors.body) {
                res.json({ success: false, message: err.errors.body.message });
              } else {
                res.json({ success: false, message: err });
              }
            }
          } else {
            res.json({ success: false, message: err });
          }
        } else {
          res.json({ success: true, message: "Blog saved!" });
        }
      });
    }
  }
});

//--------------Search blog-------------------------------
router.get("/search/:id", async (req, res, next) => {
  var id = req.params.id;
  Blog.findById({ _id: id }, function (err, data) {
    if (err) throw err;
    else res.json(data);
  });
});

//--------------Update blog-------------------------------

router.put("/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});
//--------------Delete blog-------------------------------

router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json("Post has been deleted ...");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/dislikeBlog", (req, res) => {
  // Check if id was provided inside the request body
  if (!req.body.id) {
    res.json({ success: false, message: "No id was provided." }); // Return error message
  } else {
    // Search database for blog post using the id
    Blog.findOne({ _id: req.body.id }, (err, blog) => {
      // Check if error was found
      if (err) {
        res.json({ success: false, message: "Invalid blog id" }); // Return error message
      } else {
        // Check if blog post with the id was found in the database
        if (!blog) {
          res.json({ success: false, message: "That blog was not found." }); // Return error message
        } else {
          // Get data of user who is logged in
          User.findOne({ _id: req.decoded.userId }, (err, user) => {
            // Check if error was found
            if (err) {
              res.json({ success: false, message: "Something went wrong." }); // Return error message
            } else {
              // Check if user was found in the database
              if (!user) {
                res.json({
                  success: false,
                  message: "Could not authenticate user.",
                }); // Return error message
              } else {
                // Check if user who disliekd post is the same person who originated the blog post
                if (user.username === blog.createdBy) {
                  res.json({
                    success: false,
                    messagse: "Cannot dislike your own post.",
                  }); // Return error message
                } else {
                  // Check if user who disliked post has already disliked it before
                  if (blog.dislikedBy.includes(user.username)) {
                    res.json({
                      success: false,
                      message: "You already disliked this post.",
                    }); // Return error message
                  } else {
                    // Check if user has previous disliked this post
                    if (blog.likedBy.includes(user.username)) {
                      blog.likes--; // Decrease likes by one
                      const arrayIndex = blog.likedBy.indexOf(user.username); // Check where username is inside of the array
                      blog.likedBy.splice(arrayIndex, 1); // Remove username from index
                      blog.dislikes++; // Increase dislikeds by one
                      blog.dislikedBy.push(user.username); // Add username to list of dislikers
                      // Save blog data
                      blog.save((err) => {
                        // Check if error was found
                        if (err) {
                          res.json({
                            success: false,
                            message: "Something went wrong.",
                          }); // Return error message
                        } else {
                          res.json({
                            success: true,
                            message: "Blog disliked!",
                          }); // Return success message
                        }
                      });
                    } else {
                      blog.dislikes++; // Increase likes by one
                      blog.dislikedBy.push(user.username); // Add username to list of likers
                      // Save blog data
                      blog.save((err) => {
                        // Check if error was found
                        if (err) {
                          res.json({
                            success: false,
                            message: "Something went wrong.",
                          }); // Return error message
                        } else {
                          res.json({
                            success: true,
                            message: "Blog disliked!",
                          }); // Return success message
                        }
                      });
                    }
                  }
                }
              }
            }
          });
        }
      }
    });
  }
});

module.exports = router;
