require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const recetaRoutes = require("./src/routes/receta.routes");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.error(err));

app.use("/api/recetas", recetaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
