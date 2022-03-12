const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
    try {
        res.json(await User.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post("/register", async (req, res) => {
      try {
        // send all users
          res.json(await User.create(req.body));
      } catch (error) {
        //send error
          res.status(400).json(error);
      }
  });

router.put("/:id", async (req, res) => {
    try {
        res.json(
            await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        res.json(await User.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;