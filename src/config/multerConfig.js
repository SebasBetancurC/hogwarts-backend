const multer = require("multer");

const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinaryConfig");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "hogwarts", // 📂 Carpeta donde se guardarán las imágenes en Cloudinary
    format: async () => "png", // Cambia a jpg, webp, etc. si lo prefieres
    public_id: (req, file) => file.originalname.split(".")[0], // Usa el nombre original sin extensión
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
