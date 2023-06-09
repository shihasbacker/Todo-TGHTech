var express = require("express");
var router = express.Router();

const auth = require("../middlewares/authMiddleware.js");
const userRoutes = require("../controllers/userController.js");
const todoRoutes = require("../controllers/todoController.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/register", userRoutes.registerUser);
router.post("/login", userRoutes.loginUser);

router.get("/:id", todoRoutes.listTodo);
router.post("/:id/createTodo", todoRoutes.createTodo);

router.post("/:id/completeTodo", todoRoutes.completedTodo);
router.post("/:id/cancelledTodo", todoRoutes.cancelledTodo);
router.post("/deleteTodo", todoRoutes.deleteTodo);

module.exports = router;
