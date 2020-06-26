const mongoose = require("mongoose");
const app = require("");

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

module.exports = Customer = mongoose.model("customer", customerSchema);
