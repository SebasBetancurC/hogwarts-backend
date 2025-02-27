const express = require("express");
const Wizard = require("../models/Wizard");

const router = express.Router();

// Obtener todos los magos
router.get("/", async (req, res) => {
    try {
        const wizards = await Wizard.find().populate("house");
        res.json(wizards);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los magos" });
    }
});

// Obtener un mago por ID
router.get("/:id", async (req, res) => {
    try {
        const wizard = await Wizard.findById(req.params.id).populate("house");
        if (!wizard) return res.status(404).json({ error: "Mago no encontrado" });
        res.json(wizard);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el mago" });
    }
});

// Crear múltiples magos
router.post("/", async (req, res) => {
    try {
        const savedWizards = await Wizard.insertMany(req.body);  // Insertar varios magos a la vez
        res.status(201).json(savedWizards);
    } catch (error) {
        console.error("Error al crear los magos:", error);
        res.status(500).json({ error: "Error al crear los magos", details: error.message });
    }
});


// Actualizar un mago
router.put("/:id", async (req, res) => {
    try {
        const updatedWizard = await Wizard.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedWizard) return res.status(404).json({ error: "Mago no encontrado" });
        res.json(updatedWizard);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el mago" });
    }
});

// Eliminar un mago
router.delete("/:id", async (req, res) => {
    try {
        const deletedWizard = await Wizard.findByIdAndDelete(req.params.id);
        if (!deletedWizard) return res.status(404).json({ error: "Mago no encontrado" });
        res.json({ message: "Mago eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el mago" });
    }
});

module.exports = router;
