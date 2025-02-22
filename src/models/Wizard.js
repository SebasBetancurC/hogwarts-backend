const mongoose = require("mongoose");

const WizardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  house: { type: mongoose.Schema.Types.ObjectId, ref: "House", default: null }, 
  biography: { type: String, required: true },
  wand: { type: String, default: "Desconocida" },
  patronus: { type: String, default: "Desconocido" },
  image: { type: String },
  isFounder: { type: Boolean, default: false } 
});

module.exports = mongoose.model("Wizard", WizardSchema);
