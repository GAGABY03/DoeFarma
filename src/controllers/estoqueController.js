const mongoose = require("mongoose");
const UserSchema = require("../models/UserSchema");
const MedicamentoSchema = require("../models/EstoqueSchema");
const bcrypt = require('bcrypt');


const criarLogin = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashedPassword

    const emailExists = await UserSchema.exists({
        email: req.body.email
    })

    if (emailExists) {
        return res.status(409).send({
            message: 'Esse email já foi cadastrado!',
        })
    }

    try {
        const newUser = new UserSchema(req.body)

        const savedUser = await newUser.save()

        res.status(201).send({
            message: 'Usuário cadastrado com sucesso!',
            savedUser,
        })
    } catch (err) {
        console.error(err)
        res.status(500).send({
            message: err.message,
        })
    }
};

const cadastrarMedicamento = async (request, response) => {
    const { nome_funcionario, 
        matricula_funcionario, data_entrada, nome_medicacao, forma_farmaceutica, validade, lote, composicao, acao_medicamentosa, contra_indicacao, medicamento_usado, quantidade_medicamento } = request.body;

    try {
        const medicamento = new MedicamentoSchema({
            nome_funcionario: nome_funcionario,
            matricula_funcionario: matricula_funcionario,
            data_entrada: data_entrada,
            nome_medicacao: nome_medicacao,
            forma_farmaceutica: forma_farmaceutica,
            validade: validade,
            lote: lote,
            composicao: composicao,
            acao_medicamentosa: acao_medicamentosa,
            contra_indicacao: contra_indicacao,
            medicamento_usado: medicamento_usado,
            quantidade_medicamento: quantidade_medicamento,

        });
        const salvarMedicamento = await medicamento.save();
        response.status(201).json({
            message: `Medicamento cadastrado com sucesso!`,
            medicamento: salvarMedicamento,
        });
    } catch (error) { 
        console.error(error)
        response.status(400).json({
            message: error.message,
        });
    }
};

const buscarTodosMedicamentos = async (request, response) => {
    try {

        const medicamento = await MedicamentoSchema.find()

        if (medicamento.length > 1) {
            return response.status(200).json({
                message: `Encontramos ${medicamento.length} medicamentos.`,
                medicamento
            })
        } else if (medicamento.length == 1) {
            return response.status(200).json({
                message: `Encontramos ${medicamento.length} medicamento.`,
                medicamento
            })
        } else {
            return response.status(404).json({
                message: `Nenhum medicamento cadastrado até o momento.`
            })
        }

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
};

const buscarMedicamentoPorId = async (request, response) => {
    const {
        id
    } = request.params

    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({
                message: `Por favor digite o id do medicamento corretamente, o mesmo possui 24 caracteres.`
            })
        }
        const medicamento = await MedicamentoSchema.find({
            id
        })
        if (medicamento.length == 0) {
            return response.status(200).json({
                message: `Medicamento não encontrado.`
            })
        }
        response.status(200).json(medicamento)

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
};

const deletarMedicamento = async (request, response) => {
    const {
        id
    } = request.params

    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({
                message: `Por favor digite o id da medicamento corretamente, o mesmo possui 24 caracteres.`
            })
        }
        const medicamentoEncontrado = await MedicamentoSchema.deleteOne({
            id
        })
        if (medicamentoEncontrado.deletedCount === 1) {
            return response.status(200).send({
                message: `Medicamento deletado com sucesso!`
            })
        } else {
            return response.status(404).send({
                message: "Medicamento não encontrado."
            })
        }

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const atualizarMedicamento = async (request, response) => {
    const { 
        id
    } = request.params;
    const { 
        nome_funcionario, 
        matricula_funcionario, 
        data_entrada, nome_medicacao, 
        forma_farmaceutica, 
        validade, 
        lote, 
        composicao, 
        acao_medicamentosa, 
        contra_indicacao, 
        medicamento_usado, 
        quantidade_medicamento 
    } = request.body;
    
    try {
      const medicamentoAtualizado = await MedicamentoSchema.find({ id }).updateOne({
        nome_funcionario, 
        matricula_funcionario, 
        data_entrada, 
        nome_medicacao, 
        forma_farmaceutica, 
        validade, 
        lote, 
        composicao, 
        acao_medicamentosa, 
        contra_indicacao,
        medicamento_usado, 
        quantidade_medicamento
    });
      const cadastroAtualizado = await MedicamentoSchema.find({ id });
      
      if (cadastroAtualizado.length == 0) {
        return response.status(404).json({
          Prezado: `Medicamento não encontrado.`,
        });
      }
      
      response.status(200).send({
        Prezado: "Medicamento atualizado com sucesso",
        cadastroAtualizado,
      });
    } catch (error) {
      response.status(500).json({
        message: error.message,
      });
    }
  };


module.exports = {

    criarLogin,
    cadastrarMedicamento,
    buscarTodosMedicamentos,
    buscarMedicamentoPorId,
    deletarMedicamento, 
    atualizarMedicamento

}