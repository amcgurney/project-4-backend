const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/", async (req, res) => {
    try {

        res.json(await Post.find({}));
    } catch (error) {

        res.status(400).json(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const createdPost = await Post.create(req.body)
        console.log(createdPost);

        res.redirect("/post");
    } catch(error) {
        console.log(error);
        req.error = error;
        return next();
    }
})
router.put("/:id", async (req, res) => {
    try {

        res.json(
            await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {

        res.status(400).json(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {

        res.json(await Post.findByIdAndRemove(req.params.id));
    } catch (error) {

        res.status(400).json(error);
    }
});

module.exports = router;