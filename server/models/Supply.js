const { Schema, model } = require("mongoose");

const supplySchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
    min: 10.0,
  },
});

const Supply = model("Supply", supplySchema);

module.exports = Supply;
