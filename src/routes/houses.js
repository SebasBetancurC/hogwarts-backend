const express = require("express");
const router = express.Router();
const House = require("../models/House");

console.log("✅ Archivo houses.js cargado correctamente");

// 📌 Obtener todas las casas
router.get("/", async (req, res) => {
    try {
        const houses = await House.find();
        res.json(houses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 📌 Obtener una casa por su ID
router.get("/:id", async (req, res) => {
    try {
        const house = await House.findById(req.params.id);
        if (!house) return res.status(404).json({ message: "Casa no encontrada" });
        res.json(house);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 📌 Agregar una nueva casa
router.post("/", async (req, res) => {

    console.log("📥 Datos recibidos en el servidor:", req.body);

    const { name, founder, description, emblem, colors, frontPage } = req.body;

    const newHouse = new House({ name, founder, description, emblem, colors, frontPage });

    try {
        const savedHouse = await newHouse.save();
        res.status(201).json(savedHouse);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;



