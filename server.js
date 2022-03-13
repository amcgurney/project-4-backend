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



// ROUTES

// test route
// app.get("/", (req, res) => {
//   res.send("Musician's Friend, Zone");
// });

// // USER INDEX ROUTE
// app.get("/user", async (req, res) => {
//     try {
//       // send all users
//         res.json(await User.find({}));
//     } catch (error) {
//       //send error
//         res.status(400).json(error);
//     }
// });

//   // USER CREATE ROUTE
// app.post("/user", async (req, res) => {
//     try {
//       // send all users
//         res.json(await User.create(req.body));
//     } catch (error) {
//       //send error
//         res.status(400).json(error);
//     }
// });

// // USER UPDATE ROUTE
// app.put("/user/:id", async (req, res) => {
//     try {
//       // send all users
//       res.json(
//         await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
//       );
//     } catch (error) {
//       //send error
//       res.status(400).json(error);
//     }
//   });
  
//   // USER DELETE ROUTE
//   app.delete("/user/:id", async (req, res) => {
//     try {
//       // send all users
//       res.json(await People.findByIdAndRemove(req.params.id));
//     } catch (error) {
//       //send error
//       res.status(400).json(error);
//     }
//   });


// LISTENER

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));