const express = require('express');
const router = express.Router();

const authController = require("../controllers/authController");
const controller = require('../controllers/estoqueController');

const { checkAuth } = require("../middlewares/auth");

router.post("/usuario", controller.criarLogin);
router.post("/login", authController.login);
router.post("/cadastrar", controller.cadastrarMedicamento);
router.get("/buscar", controller.buscarTodosMedicamentos);
router.get("/medicamento/:id", controller.buscarMedicamentoPorId);
router.delete("/deletar/:id", checkAuth, controller.deletarMedicamento);
router.patch("/atualizar/:id", checkAuth, controller.atualizarMedicamento);


module.exports = router;
