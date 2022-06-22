const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
app.use(express.json());

//Con
mongoose.connect(process.env.DB_CONNECT, () =>
  console.log("Connected to cluster")
);

//routes go here
const addItem = require("./routes/addItemToCart");
const getItems = require("./routes/getItemsFromCart");
const updateQuantity = require("./routes/updateItemInCart");
const removeItem = require("./routes/deleteItemFromCart");

app.use("/", addItem);
app.use("/", getItems);
app.use("/", updateQuantity);
app.use("/", removeItem);

app.listen(3000, () => console.log("Server is started and ready to roll"));
