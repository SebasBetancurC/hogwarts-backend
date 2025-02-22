const mongoose = require("mongoose");

const FounderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  house: {type: mongoose.Schema.Types.ObjectId, ref: 'House', required: true},
  biography: { type: String, required: true },
  image: { type: String } 
});

module.exports = mongoose.model("Founder", FounderSchema);
