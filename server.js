require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const recetaRoutes = require("./src/routes/receta.routes");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.error(err));

app.use("/api/recetas", recetaRoutes);

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
}

module.exports = app;
