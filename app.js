const express = require('express');
const app = express();
const cors = require('cors');


require('dotenv').config();

const db = require('./config/database');
const doadorRoutes = require('./routes/doadorRoutes');
const estoqueRoutes = require('./routes/estoqueRoutes')

db.connect();

app.use(cors());
app.use(express.json());
app.use("/criarDoador", doadorRoutes);
app.use("/estoque", estoqueRoutes);

module.exports = app;