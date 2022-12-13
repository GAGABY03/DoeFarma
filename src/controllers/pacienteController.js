const mongoose = require("mongoose");
const UserSchema = require("../models/UserSchema")
const PacienteSchema = require("../models/PacienteSchema");
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
}

const cadastrarPaciente = async (request, response) => {
    const { nome_paciente, telefone, email, cpf, data_nascimento, endereco: { cep, rua, numero, complemento, referencia, cidade, bairro, estado }, medicamento, forma_farmaceutica, quantidade_medicamento } = request.body;

    try {
        const paciente = new PacienteSchema({
            nome_paciente: nome_paciente,
            telefone: telefone,
            email: email,
            cpf: cpf,
            data_nascimento: data_nascimento,
            endereco: {
                cep: cep,
                rua: rua,
                numero: numero,
                complemento: complemento,
                referencia: referencia,
                bairro: bairro,
                cidade: cidade,
                estado: estado,

            },
            medicamento: medicamento,
            forma_farmaceutica: forma_farmaceutica,
            quantidade_medicamento: quantidade_medicamento,

        });
        const salvarpaciente = await paciente.save();
        response.status(201).json({
            message: `Paciente cadastrado com sucesso!`,
            paciente: salvarpaciente,
        });
    } catch (error) {
        console.error(error)
        response.status(400).json({
            message: error.message,
        });
    }
};

const buscarTodosPacientes = async (request, response) => {
    try {

        const paciente = await PacienteSchema.find()

        if (paciente.length > 1) {
            return response.status(200).json({
                message: `Encontramos ${paciente.length} pacientes.`,
                paciente
            })
        } else if (paciente.length == 1) {
            return response.status(200).json({
                message: `Encontramos ${paciente.length} paciente.`,
                paciente
            })
        } else {
            return response.status(404).json({
                message: `Nenhum paciente foi cadastrado até o momento.`
            })
        }

    } catch (error) {
        console.error(error)
        response.status(500).json({
            message: error.message
        })
    }
};

const buscarPacientePorId = async (request, response) => {
    const {
        id
    } = request.params

    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({
                message: `Por favor digite o id do paciente corretamente, o mesmo possui 24 caracteres.`
            })
        }
        const paciente = await PacienteSchema.find({
            id
        })
        if (paciente.length == 0) {
            return response.status(200).json({
                message: `paciente não encontrada.`
            })
        }
        response.status(200).json(paciente)

    } catch (error) {
        console.error(error)
        response.status(500).json({
            message: error.message
        })
    }
};

const deletarPaciente = async (request, response) => {
    const {
        id
    } = request.params

    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({
                message: `Por favor digite o id da paciente corretamente, o mesmo possui 24 caracteres.`
            })
        }
        const pacienteEncontrado = await PacienteSchema.deleteOne({
            id
        })
        if (pacienteEncontrado.deletedCount === 1) {
            return response.status(200).send({
                message: `A paciente foi deletado com sucesso!`
            })
        } else {
            return response.status(404).send({
                message: "A paciente não foi encontrado."
            })
        }

    } catch (error) {
        console.error(error)
        response.status(500).json({
            message: error.message
        })
    }
};

const atualizarPaciente = async (request, response) => {
    const { id } = request.params;
    const {
        nome_paciente, telefone, 
        email, 
        cpf, 
        data_nascimento, 
        endereco: { 
            cep, 
            rua, 
            numero, 
            complemento, 
            referencia, 
            cidade, 
            bairro, 
            estado, 
        }, 
            paciente, 
            quantidade } = request.body;

    try {
        const pacienteAtualizado = await PacienteSchema.find({ id }).updateOne({
            nome_paciente, telefone, email, cpf, data_nascimento, endereco: { cep, rua, numero, complemento, referencia, cidade, bairro, estado, }, paciente, quantidade
        });
        const cadastroAtualizado = aacienteSchema.find({ id });

        if (cadastroAtualizado.length == 0) {
            return response.status(404).json({
                Prezado: `A paciente não foi encontrado.`,
            });
        }

        response.status(200).send({
            Prezado: "paciente atualizado com sucesso",
            cadastroAtualizado,
        });
    } catch (error) {
        console.error(error)
        response.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {

    criarLogin,
    cadastrarPaciente,
    buscarTodosPacientes,
    buscarPacientePorId,
    deletarPaciente,
    atualizarPaciente
}