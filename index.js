require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db.js");
const cors = require("cors");
const app = express();
const uploadRoutes = require("./src/routes/uploads.js");
connectDB();

app.use(express.json());
app.use(cors());


//routes
app.use("/api", uploadRoutes);
app.use("/api/houses", require("./src/routes/houses.js"));


const PORT = process.env.PORT || 5000;

app.get("/api/test", (req, res) => {
    res.json({ message: "🚀 ¡Servidor funcionando correctamente!" });
});


app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto ${PORT}`));

