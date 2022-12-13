const express = require('express');
const router = express.Router();

const authController = require("../controllers/authController");
const controller = require('../controllers/pacienteController');

const { checkAuth } = require("../middlewares/auth");

router.post("/usuario", controller.criarLogin);
router.post("/login", authController.login);
router.get("/buscar", controller.buscarTodosPacientes);
router.get("/paciente/:id", controller.buscarPacientePorId);
router.post("/cadastrar", controller.cadastrarPaciente);
router.delete("/deletar/:id", checkAuth, controller.deletarPaciente);
router.patch("/atualizar/:id", checkAuth, controller.atualizarPaciente);


module.exports = router;