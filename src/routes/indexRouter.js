const router = require("express").Router();

router.get("/", (request, response) => {
  response.send({
    versao: "1.0",
    titulo: "Doe-Farma",
    descricao:
      "A proposta do Doe-Farma é conectar pessoas que por algum motivo tenham medicação ou equipamento médico-hospitalar em casa e em desuso, e que esteja em boas condições para doar a quem mais precisa. Pensando nisso, resolvi construir uma API que conecta doadores, voluntários e pacientes.",
  });
});

module.exports = router;