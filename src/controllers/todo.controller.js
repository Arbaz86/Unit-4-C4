const express = require("express");
const router = express.Router();

const Todo = require("../models/todo.model");

router.get("/", async (req, res) => {
  try {
    const todos = Todo.find({}).lean().exec();

    return res.status(201).send({ todos: todos });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const todo = Todo.create(req.body);

    return res.status(201).send({ todo: todo });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const todo = Todo.find(req.params.id).lean().exec();

    return res.status(201).send({ todo: todo });
  } catch (error) {
    return res.status(401).send({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const todo = Todo.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send({ todo: todo });
  } catch (error) {
    return res.status(401).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const todo = Todo.findOneAndDelete(req.params.id).lean().exec();

    return res.status(201).send({ todo: todo });
  } catch (error) {
    return res.status(401).send({ message: error.message });
  }
});

module.exports = router;
