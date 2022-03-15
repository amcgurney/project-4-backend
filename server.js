// DEPENDENCIES
require("dotenv").config();
const { PORT = 4000, MONGODB_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const controllers = require("./controllers/");
var corsOptions = {
  origin: "http://localhost:3000"
};

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



// MiddleWare

app.use(cors(corsOptions)); 
app.use(morgan("dev")); 
app.use(express.json()); 
app.use('/post', controllers.post);
app.use('/user', controllers.user);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// LISTENER

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));