const express = require('express');
const router = express.Router();

const controller = require('../controllers/estoqueController');


router.get("/", controller.buscarTodasEstoque);
router.get("/:id", controller.buscarEstoqueId);
router.post("/", controller.criarEstoque);
router.delete("/:id", controller.deletarEstoque);
router.patch("/:id", controller.atualizarEstoque);


module.exports = router;