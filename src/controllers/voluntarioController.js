const mongoose = require("mongoose");
const UserSchema = require("../models/UserSchema");
const VoluntarioSchema = require("../models/VoluntarioSchema");
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
const cadastrarVoluntario = async (request, response) => {
    const { nome_voluntario, telefone, email, cpf, registro_profisional, data_nascimento, endereco: { cep, rua, numero, complemento, referencia, bairro, cidade, estado }, profissao, especialidade } = request.body;

    try {
        const voluntario = new VoluntarioSchema({
            nome_voluntario: nome_voluntario,
            telefone: telefone,
            email: email,
            cpf: cpf,
            data_nascimento: data_nascimento,
            registro_profisional: registro_profisional,
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
            profissao: profissao,
            especialidade: especialidade,

        });
        const salvarVoluntario = await voluntario.save();
        response.status(201).json({
            message: `Voluntario cadastrado com sucesso!`,
            voluntario: salvarVoluntario,
        });
    } catch (error) {
        console.error(error)
        response.status(400).json({
            message: error.message,
        });
    }
};

const buscarTodosVoluntarios = async (request, response) => {
    try {

        const voluntario = await VoluntarioSchema.find()

        if (voluntario.length > 1) {
            return response.status(200).json({
                message: `Encontramos ${voluntario.length} voluntarios.`,
                voluntario
            })
        } else if (voluntario.length == 1) {
            return response.status(200).json({
                message: `Encontramos ${voluntario.length} voluntario.`,
                voluntario
            })
        } else {
            return response.status(404).json({
                message: `Nenhum voluntario  cadastrado até o momento.`
            })
        }

    } catch (error) {
        console.error(error)
        response.status(500).json({
            message: error.message
        })
    }
};
const buscarVoluntarioPorId = async (request, response) => {
    const {
        id
    } = request.params

    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({
                message: `Por favor digite o id do voluntario corretamente, o mesmo possui 24 caracteres.`
            })
        }
        const voluntario = await VoluntarioSchema.find({
            id
        })
        if (voluntario.length == 0) {
            return response.status(200).json({
                message: `voluntario não encontrada.`
            })
        }
        response.status(200).json(voluntario)

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
};
const deletarVoluntario = async (request, response) => {
    const {
        id
    } = request.params

    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({
                message: `Por favor digite o id da voluntario corretamente, o mesmo possui 24 caracteres.`
            })
        }
        const voluntarioEncontrado = await VoluntarioSchema.deleteOne({
            id
        })
        if (voluntarioEncontrado.deletedCount === 1) {
            return response.status(200).send({
                message: `Voluntario foi deletado com sucesso!`
            })
        } else {
            return response.status(404).send({
                message: "Voluntario não foi encontrado."
            })
        }

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const atualizarVoluntario = async (request, response) => {
    const { id } = request.params;
    const {
        nome_voluntario, telefone, email, cpf, registro_profisional, data_nascimento, endereco: { cep, rua, numero, complemento, referencia, bairro, cidade, estado }, profissao, especialidade } = request.body;

    try {
        const voluntarioAtualizado = await VoluntarioSchema.find({ id }).updateOne({
            nome_voluntario, telefone, email, cpf, registro_profisional, data_nascimento, endereco: { cep, rua, numero, complemento, referencia, bairro, cidade, estado }, profissao, especialidade
        });
        const cadastroAtualizado = await VoluntarioSchema.find({ id });

        if (cadastroAtualizado.length == 0) {
            return response.status(404).json({
                Prezado: `A voluntario não foi encontrado.`,
            });
        }

        response.status(200).send({
            Prezado: "voluntario atualizado com sucesso",
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
    cadastrarVoluntario,
    buscarTodosVoluntarios,
    buscarVoluntarioPorId,
    deletarVoluntario, 
    atualizarVoluntario

}