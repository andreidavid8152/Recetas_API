const mongoose = require("mongoose");

const recetaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    ingredientes: { type: [String], required: true },
    instrucciones: { type: String, required: true },
    calorias: { type: Number, required: true },
    categoria: { type: String, enum: ["Desayuno", "Almuerzo", "Cena", "Snack"], required: true },
    tiempoPreparacion: { type: Number, required: true }, // en minutos
});

module.exports = mongoose.model("Receta", recetaSchema);
