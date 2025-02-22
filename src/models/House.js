const mongoose = require("mongoose");

const HouseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    founder: { type: String, required: true },
    description: { type: String, required: true },
    emblem: { type: String, required: true },
    frontPage: { type: String, required: true },
    colors: { type: [String], required: true }
});

module.exports = mongoose.model("House", HouseSchema);
