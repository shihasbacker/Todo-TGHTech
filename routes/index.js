var express = require("express");
var router = express.Router();

const userRoutes = require("../controllers/userController.js");
const auth = require("../middlewares/authMiddleware.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/register", userRoutes.registerUser);
router.post("/login", userRoutes.loginUser);

module.exports = router;
