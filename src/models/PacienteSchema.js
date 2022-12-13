const mongoose = require('mongoose');

const PacienteSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },    
    nome_paciente: {
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
    data_nascimento: {
        type: String,
        required: false
    },
    endereco: {
        cep: {
            type: String,
            required: true
        },
        rua:{
            type: String, 
            required: true
           },
        numero:{
            type: String, 
            required: true
           },
        complemento:{
            type: String, 
            required: true
           },
        referencia:{
            type: String, 
            required: true
           },
        bairro:{
            type: String, 
            required: true
           },
        cidade:{
            type: String, 
            required: true
           },
        estado:{
            type: String, 
            required: true
           },
    },
    medicamento: {
        type: String,
        required: false
    },
    forma_farmaceutica: {
        type: String,
        required: true
    },
    quantidade_medicamento: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('paciente', PacienteSchema)
