const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    text:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        required: true,
    },
    priority:{
        type: Number,
        required: true,
    }
  },
  { timestamps: true }
);

const todoModel = mongoose.model("todo", todoSchema);
module.exports = todoModel;