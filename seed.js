/* eslint-env node */
require('dotenv').config();
const mongoose = require('mongoose');

// Define el esquema de receta (ajusta según tu modelo real)
const recetaSchema = new mongoose.Schema({
    nombre: String,
    ingredientes: [String],
    instrucciones: String,
    tiempo: Number
});

const Receta = mongoose.model('Receta', recetaSchema);

async function seed() {
    await mongoose.connect(process.env.MONGO_URI);

    // Borra datos previos
    await Receta.deleteMany({});

    // Datos de ejemplo
    const recetas = [
        {
            nombre: 'Tortilla de patatas',
            ingredientes: ['patatas', 'huevos', 'cebolla', 'aceite', 'sal'],
            instrucciones: 'Pelar y cortar las patatas y la cebolla. Freír, añadir los huevos batidos y cuajar.',
            tiempo: 30
        },
        {
            nombre: 'Ensalada César',
            ingredientes: ['lechuga', 'pollo', 'queso parmesano', 'crutones', 'salsa César'],
            instrucciones: 'Mezclar todos los ingredientes y servir fría.',
            tiempo: 15
        }
    ];

    await Receta.insertMany(recetas);

    console.log('Base de datos poblada con recetas de ejemplo.');
    await mongoose.disconnect();
}

seed().catch(err => {
    console.error(err);
    process.exit(1);
});