const express = require('express');
const router = express.Router();

const authController = require("../controllers/authController");
const controller = require('../controllers/voluntarioController');

const { checkAuth } = require("../middlewares/auth");

router.post("/usuario", controller.criarLogin);
router.post("/login", authController.login);
router.get("/buscar", controller.buscarTodosVoluntarios);
router.get("/voluntario/:id", controller.buscarVoluntarioPorId);
router.post("/cadastrar", controller.cadastrarVoluntario);
router.delete("/deletar/:id", checkAuth, controller.deletarVoluntario);
router.patch("/atualizar/:id", checkAuth, controller.atualizarVoluntario);


module.exports = router;

    