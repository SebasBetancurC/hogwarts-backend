const express = require("express");
const router = express.Router();
const upload = require("../config/multerConfig");

// Ruta para subir imágenes
router.post("/upload", upload.single("image"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No se ha subido ninguna imagen" });
    }

    res.json({ imageUrl: req.file.path });
  } catch (error) {
    res.status(500).json({ error: "Error al subir la imagen" });
  }
});

module.exports = router;
