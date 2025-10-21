/* eslint-env node */
const express = require("express");
const router = express.Router();
const recetaController = require("../controllers/receta.controller");

router.get("/", recetaController.obtenerRecetas);
router.post("/", recetaController.crearReceta);
router.get("/:id", recetaController.obtenerRecetaPorId);
router.put("/:id", recetaController.actualizarReceta);
router.delete("/:id", recetaController.eliminarReceta);

module.exports = router;
