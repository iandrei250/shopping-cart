const router = require("express").Router();
const Item = require("../model/Item");

const filter = {};
router.get("/get", async (req, res) => {
  const all = await Item.find(filter);

  res.send(all);
});

module.exports = router;
