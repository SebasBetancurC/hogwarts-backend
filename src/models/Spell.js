const mongoose = require("mongoose");

const SpellSchema = new mongoose.Schema({
  name: { type: String, required: true },
  incantation: { type: String, required: true }, 
  effect: { type: String, required: true },
  category: { type: String, enum: ["Defensivo", "Ofensivo", "Curación", "Encantamiento", "Transformación"] },
  image: { type: String }
});

module.exports = mongoose.model("Spell", SpellSchema);
