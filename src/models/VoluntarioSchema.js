const mongoose = require('mongoose');

const VoluntarioSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome_voluntario: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    registro_profisional: {
        type: String,
        required: true
    },
    data_nascimento: {
        type: String,
        required: false
    },
    endereco: {
        cep: {
            type: String,
            required: true
        },
        rua: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        complemento: {
            type: String,
            required: true
        },
        referencia: {
            type: String,
            required: true
        },
        bairro: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        },
    },
    profissao: {
        type: String,
        required: false
    },
    especialidade: {
        type: String,
        required: false
    }

}, { timestamps: true })

module.exports = mongoose.model('Voluntario', VoluntarioSchema)