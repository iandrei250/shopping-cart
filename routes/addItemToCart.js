const router = require("express").Router();

router.post("/add", (req, res) => {
  res.send("Item added to cart");
});

module.exports = router;
