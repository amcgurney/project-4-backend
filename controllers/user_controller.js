const express = require("express");
const router = express.Router();
const { user } = require("../models");
const user = require("../models/user");
const { modelName } = require("../models/user");

router.get("/", async (req, res) => {
    try {

        res.json(await user.find({}));
    } catch (error) {

        res.status(400).json(error);
    }
});

// USER CREATE ROUTE
router.post("/", async (req, res, next) => {
    try {
        const user = await user.create(req.body);
        return res.status(200).json(user)
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

router.put("/:id", async (req, res) => {
    try {

        res.json(
            await user.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {

        res.status(400).json(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {

        res.json(await user.findByIdAndRemove(req.params.id));
    } catch (error) {

        res.status(400).json(error);
    }
});

module.exports = router;