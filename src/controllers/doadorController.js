const mongoose = require("mongoose");
const DoadorSchema = require("../models/DoadorSchema");
const bcrypt = require('bcrypt');
const UserSchema = require("../models/UserSchema")


const criarDoador= async (request, response) => {
        const { nome_doador, telefone, cpf, endereco:{cep, rua, numero, complemento, referencia, estado, cidade, bairro}, email, medicamento, validade, lote, medicamento_usado, quantidade } = request.body;
                            
            try {
              const doador = new DoadorSchema({
                nome_doador: nome_doador,
                telefone: telefone,
                cpf: cpf,
                email: email,
                endereco:{
                    cep:cep,
                    rua:rua, 
                    numero:numero, 
                    complemento:complemento, 
                    referencia:referencia,
                    estado:estado, 
                    cidade:cidade, 
                    bairro:bairro,
                }, 
                medicamento: medicamento,
                validade: validade,
                lote: lote,
                medicamento_usado: medicamento_usado,
                quantidade: quantidade,                
                
            });
              const salvarDoador = await doador.save();
              response.status(201).json({
                message: `Doador cadastrado com sucesso!`,
                doador: salvarDoador,
              });
            } catch (error) {
              console.error(error)
              response.status(400).json({
                message: error.message,
              });
            }
          };
  
const buscarTodosDoadores = async (request, response) => {
    try {

        const Doador = await DoadorSchema.find()

        if (Doador.length > 1) {
            return response.status(200).json({
                message: `Encontramos ${Doador.length} doadores.`,
                Doador
            })
        } else if (Doador.length == 1) {
            return response.status(200).json({
                message: `Encontramos ${Doador.length} doador.`,
                Doador
            })
        } else {
            return response.status(404).json({
                message: `Nenhum doador cadastrado até o momento.`
            })
        }

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const buscarDoadorPorId = async (request, response) => {
    const {
        id
    } = request.params

    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({
                message: `Por favor digite o id do doador corretamente, o mesmo possui 24 caracteres.`
            })
        }
        const Doador = await DoadorSchema.find({
            id
        })
        if (Doador.length == 0) {
            return response.status(200).json({
                message: `Doador não encontrado.`
            })
        }
        response.status(200).json(Doador)

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const deletarDoador = async (request, response) => {
    const {
        id
    } = request.params

    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({
                message: `Por favor digite o id da doador corretamente, o mesmo possui 24 caracteres.`
            })
        }
        const doadorEncontrado = await DoadorSchema.deleteOne({
            id
        })
        if (doadorEncontrado.deletedCount === 1) {
            return response.status(200).send({
                message: `Doador deletado com sucesso!`
            })
        } else {
            return response.status(404).send({
                message: "O Doador não foi encontrado."
            })
        }

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const atualizarDoador = async (request, response) => {
    const { id } = request.params;
    const { 
        nome_doador, telefone, cpf, endereco:{cep, rua, numero, complemento, referencia, estado, cidade, bairro}, email, medicamento, validade, lote, medicamento_usado, quantidade } = request.body;
    
    try {
      const DoadorAtualizado = await DoadorSchema.find({ id }).updateOne({
        nome_doador, telefone, cpf, endereco:{cep, rua, numero, complemento, referencia, estado, cidade, bairro}, email, medicamento, validade, lote, medicamento_usado, quantidade
    });
      const cadastroAtualizado = await DoadorSchema.find({ id });
      
      if (cadastroAtualizado.length == 0) {
        return response.status(404).json({
          Prezado: `Doador não foi encontrado.`,
        });
      }
      
      response.status(200).send({
        Prezado: "Doador atualizado com sucesso",
        cadastroAtualizado,
      });
    } catch (error) {
      response.status(500).json({
        message: error.message,
      });
    }
  };

module.exports = {
    criarDoador,
    buscarTodosDoadores,
    buscarDoadorPorId,
    deletarDoador,
    atualizarDoador
}