const express = require('express');
const router = express.Router();

const controller = require('../controllers/doadorController');


router.post("/criarDoador", controller.criarDoador);
router.get("/buscarTodosDoadores", controller.buscarTodosDoadores);
router.get("/buscarPorId/:id", controller.buscarDoadorPorId);
router.delete("/deletarDoador/:id", controller.deletarDoador);
router.patch("/atualizarDoador/:id", controller.atualizarDoador);


module.exports = router;