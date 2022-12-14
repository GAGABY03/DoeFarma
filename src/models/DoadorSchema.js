const mongoose = require('mongoose');

const DoadorSchema = new mongoose.Schema({
   id:{
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId
   },
      
    nome_doador: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
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
        estado:{
            type: String, 
            required: true
           },
        cidade:{
            type: String, 
            required: true
           },
        bairro:{
            type: String, 
            required: true
           },
    },
    medicamento: {
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
    medicamento_usado: {
        type: String,
        required: true
    },
    quantidade: {
        type: String,
        required: true
    },

}, { timestamps : true })

module.exports = mongoose.model('doador', DoadorSchema)