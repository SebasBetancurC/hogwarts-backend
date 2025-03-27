const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "hogwarts",
    format: async () => "png", // Cambia a jpg, webp, etc. si lo prefieres
    public_id: (req, file) => file.originalname.split(".")[0], // Nombre original sin extensión
    resource_type: "auto", // Acepta cualquier tipo de archivo
  },
});

const upload = multer({ storage });

module.exports = upload;
