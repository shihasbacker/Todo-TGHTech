const todoModel = require("../models/todoModel.js");

exports.createTodo = async (req, res) => {
  let todo = req.body;
  let userId = req.params.id;

  try {
    let todo = await todoModel.create({
      userId: userId,
      text: req.body.text,
      priority: req.body.priority,
      status: "active",
    });
    res.status(200).json("successful");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.listTodo = async (req, res) => {
  try {
    let userId = req.params.id;
    let todos = await todoModel
      .find({ userId, userId })
      .sort({ priority: 1, createdAt: -1 });
    if (!todos.length) {
      res.status(200).json("No todos to show");
    } else {
      res.status(200).json({ todos });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.completedTodo = async (req, res) => {
  try {
    let todoId = req.body.id;
    let userId = req.params.id;
    let todo = await todoModel.updateOne(
      { _id: todoId, userId: userId },
      { $set: { status: "completed" } }
    );
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.cancelledTodo = async (req, res) => {
  try {
    let todoId = req.body.id;
    let userId = req.params.id;
    let todo = await todoModel.updateOne(
      { _id: todoId, userId: userId },
      { $set: { status: "cancelled" } }
    );
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    let todoId = req.body.id;
    let todo = await todoModel.deleteOne({ _id: todoId });
    res.status(200).json({ todo, msg: "deletion success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
