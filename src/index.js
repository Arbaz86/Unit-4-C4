const express = require("express");
const app = express();

app.use(express.json());

const userController = require("./controllers/user.controller");
const todoController = require("./controllers/todo.controller");

app.use("/users", userController);
app.use("/todos", todoController);

module.exports = app;
