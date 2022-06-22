const express = require("express");
const app = express();

//routes go here
const addItem = require("./routes/addItemToCart");

app.use("/", addItem);
app.listen(3000, () => console.log("Server is started and ready to roll"));
