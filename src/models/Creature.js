const mongoose = require("mongoose");

const CreatureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ["Animal Fantástico", "Criatura Inteligente"], required: true },
  description: { type: String, required: true },
  abilities: { type: [String], default: [] }, 
  image: { type: String }
});

module.exports = mongoose.model("Creature", CreatureSchema);
