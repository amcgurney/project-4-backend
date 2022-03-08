
// DEPENDENCIES

// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 3000
// pull MONGODB_URL from .env
const { PORT = 3000, MONGODB_URL } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
// import mongoose
const mongoose = require("mongoose");
// import middleware
const cors = require("cors");
const morgan = require("morgan");


// DATABASE CONNECTIONS

// Establish Connection
mongoose.connect(MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

// MODELS

const UserSchema = new mongoose.Schema({
    name: String,
    image: String,
    username: String,
    password: String,
  });

const User = mongoose.model("User", UserSchema);

// MiddleWare

app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies




// ROUTES

// create a test route
app.get("/", (req, res) => {
  res.send("Musician's Friend");
});

// USER INDEX ROUTE
app.get("/user", async (req, res) => {
    try {
      // send all users
        res.json(await User.find({}));
    } catch (error) {
      //send error
        res.status(400).json(error);
    }
});

  // USER CREATE ROUTE
app.post("/user", async (req, res) => {
    try {
      // send all users
        res.json(await User.create(req.body));
    } catch (error) {
      //send error
        res.status(400).json(error);
    }
});

// USER UPDATE ROUTE
app.put("/user/:id", async (req, res) => {
    try {
      // send all users
      res.json(
        await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  
  // USER DELETE ROUTE
  app.delete("/user/:id", async (req, res) => {
    try {
      // send all users
      res.json(await People.findByIdAndRemove(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });


// LISTENER

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));