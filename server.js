const express = require("express");
const path = require("path");

const app = express();
app.set("port", process.env.PORT || 3001);

//----Midlewares----//
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

//----Routes----//
app.use("/", require("./routes/root"));

//----Server Running----//
app.listen(app.get("port"), () => {
  console.log("Server running on port", app.get("port"));
});
