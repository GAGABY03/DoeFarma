require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./database/mongoConfig');
const doadorRoutes = require('./routes/doadorRouter');
const estoqueRoutes = require('./routes/estoqueRouter');
const pacienteRoutes = require('./routes/pacienteRouter');
const voluntarioRoutes = require('./routes/voluntarioRouter');

const app = express();
app.use(express.json());
app.use(cors());

db.connect();

app.use("/doador", doadorRoutes);
app.use("/estoque", estoqueRoutes);
app.use("/paciente", pacienteRoutes);
app.use("/voluntario", voluntarioRoutes);

module.exports = app;