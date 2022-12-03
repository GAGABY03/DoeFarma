const express = require('express');
const router = express.Router();

const controller = require('../controllers/doadorController');


//router.get("/", controller.buscarTodasDoacao);
//router.get("/:id", controller.buscarDoacaoId);
router.post("/", controller.criarDoacao);
//router.delete("/:id", controller.deletarDoacao;
//router.patch("/:id", controller.atualizarDoacao;


module.exports = router;