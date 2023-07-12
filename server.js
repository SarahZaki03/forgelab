const express = require("express");
const app = express();
const path = require("path");

// set express to look in this folder to render our view
app.set("views", path.join(__dirname, "views"));
// configure template engine
app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const authRouter = require("./routes/oauth");
app.use("/oauth", authRouter);

app.listen(3000);
// ahmad.khairat@autodesk.com
