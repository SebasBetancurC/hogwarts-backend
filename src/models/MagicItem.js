const mongoose = require("mongoose");

const MagicItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["Varita", "Escoba", "Piedra", "Poción", "Reliquia"] },
  description: { type: String, required: true },
  owner: { type: String }, 
  image: { type: String }
});

module.exports = mongoose.model("MagicItem", MagicItemSchema);
