const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Arbaz:Arbaz123@cluster0.zv7ao.mongodb.net/c4-evaluation?"
  );
};
