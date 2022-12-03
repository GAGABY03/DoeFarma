const mongoose = require('mongoose');

const EstoqueSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome_funcionario: {
        type: String,
        required: true
    },
    matricula_funcionario: {
        type: String,
        required: true
    },
    data_entrada: {
        type: String,
        required: true
    },
    nome_medicacao: {
        type: String,
        required: true
    },
    classe_medicamento: {
        type: String,
        required: true
    },
    validade: {
        type: String,
        required: true
    },
    lote: {
        type: String,
        required: true
    },
    forma_farmaceutica: {
        type: String,
        required: true
    },
    composicao: {
        type: Array,
        required: true
    },
    acao_medicamentosa: {
        type: Array,
        required: true
    },
    contra_indicacao: {
        type: Array,
        required: true
    },
    medicamento_usado: {
        type: Boolean,
        required: true
    },
    quantidade_medicamento: {
        type: Number,
        required: true
    },

}, { timestamps: true })

module.exports = mongoose.model("doador", EstoqueSchema)