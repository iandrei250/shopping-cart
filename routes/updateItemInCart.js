const router = require("express").Router();
const Item = require("../model/Item");

router.patch("/update", (req, res) => {
  const id = req.body._id;
  const newQuantity = req.body.quantity;

  Item.findByIdAndUpdate(id, { quantity: newQuantity }, (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});

module.exports = router;
