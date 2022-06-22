const router = require("express").Router();
const Item = require("../model/Item");

router.post("/add", async (req, res) => {
  const item = new Item({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    quantity: req.body.quantity,
  });

  try {
    const addedItem = await item.save();
    res.send(addedItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
