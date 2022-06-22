const router = require("express").Router();
const Item = require("../model/Item");

router.delete("/delete", (req, res) => {
  const id = req.body._id;

  Item.findOneAndRemove(id, (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});

module.exports = router;
