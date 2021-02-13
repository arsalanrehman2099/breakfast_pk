const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var path = require('path');


const order = require("./routes/api/orders");

const app = express();

// Add headers
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// header = w.Header();
// header.Add("Access-Control-Allow-Origin", "*");
// header.Add("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
// header.Add("Access-Control-Allow-Headers", "X-Requested-With,content-type");
// header.Add(
//   "Access-Control-Allow-Headers",
//   "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
// );

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DB Config
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Connection Error : " + err));

// Use Routes
app.use("/api/orders", order);

// Serve static assets if in production

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port " + port));
