const express = require("express");
const router = express.Router();
const Blog = require('../models/blog');

router.get("/",async(req,res) => {
    try {
    const blogs = await Blog.find();
    res.send(blogs);
    }catch(error) {
        console.error(error);
        res.status(500).send("error");
    }
});
router.post("/",async(req,res) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.send(blog);

    } catch(error) {
        console.error(error);
        res.status(400).send("error occured.")
    }
});
router.put("/:id",async(req,res) => {
    try {
        const blogId = req.params.id;
    const updatedBlog = await Blog.findByIdAndUpdate(blogId, req.body, {
      new: true,
    });
    if (!updatedBlog) {
      res.status(404).send("Blog not found");
    } else {
      res.send(updatedBlog);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating blog");
  }
});
router.delete('/:id',async(req,res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Blog Deleted"});
    } catch(err) {
        res.status(400).json({error:err.message})
    }
});


module.exports = router;



