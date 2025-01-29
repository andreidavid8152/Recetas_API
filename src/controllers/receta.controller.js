const Receta = require("../models/Receta");

exports.obtenerRecetas = async (req, res) => {
    try {
        const recetas = await Receta.find();
        res.json(recetas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.crearReceta = async (req, res) => {
    try {
        const nuevaReceta = new Receta(req.body);
        await nuevaReceta.save();
        res.status(201).json(nuevaReceta);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.obtenerRecetaPorId = async (req, res) => {
    try {
        const receta = await Receta.findById(req.params.id);
        if (!receta) return res.status(404).json({ mensaje: "Receta no encontrada" });
        res.json(receta);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.actualizarReceta = async (req, res) => {
    try {
        const recetaActualizada = await Receta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(recetaActualizada);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.eliminarReceta = async (req, res) => {
    try {
        await Receta.findByIdAndDelete(req.params.id);
        res.json({ mensaje: "Receta eliminada" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
