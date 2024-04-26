var express = require("express");
var router = express.Router();
const app = express();
app.use(express.json());

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("Hello updates");
  res.status(200).json(req.body);
});

// GET specific user by ID
router.get("/:id", function (req, res, next) {
  const { id } = req.params;
  console.log(`Hello user with id: ${id}`);
  res.status(200).json(req.params);
});

module.exports = router;
