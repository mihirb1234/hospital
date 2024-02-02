const express = require("express");

const colors = require("colors");

const morgan = require("morgan");

const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

dotenv.config();

//mongodb connection
connectDB();
//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes

// app.get("/", (req, res) => {
//   res.status(200).send({
//     message: "server running",
//   });
// });

app.use("/api/v1/user", require("./routes/user.routes.js"));   //'string',filename_of_routes

//listen

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
