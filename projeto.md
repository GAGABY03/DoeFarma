# Projeto: DoeFarma

 DoeFarma, é um sistema que busca conectar doadores de itens utilizados na saúde, como produtos e utensílios médico-hospitalares. Os volumes poderão ser ofertados de maneira gratuita para pacientes que ainda necessitam ou estejam fazendo uso contínuo destes produtos. Neste projeto é possível o recebimento dos seguintes: medicamentos na validade, curativos em geral, material de higiene pessoal, equipamentos e utensílios para pessoas com deficiência, produtos que diminuam os casos de feridas por decúbito em pessoas com mobilidade reduzida, doentes de câncer ou imunosuprimidos. A intenção do app é conectar possíveis fontes de recebimento, com a comprovação da necessidade, pois desta forma, os que estão realizando a doação terão certeza do destino. 

 O objetivo do projeto é incentivar a doação, além oferecer orientações de como efetuar o descarte apropriado desses produtos que não servem mais para consumo/uso, cadastrar voluntários (Farmacêuticos, Enfemeiros, Assistentes Sociais, Psicológos, Atendentes, Educadores Ambientais) para que seja feito um trabalho multidisciplinar e que atenda tanto as questões sociais, quanto ambientais. 
 
 # 📁Arquitetura:

 📁 Projeto
   |
   |-  📁 src
   |    |
        
   |    |- 📁 controllers
   |         |- 📄 authController.js
   |         |- 📄 doacaoController.js
   |         |- 📄 estoqueController.js
   |         |- 📄 pacienteController.js
   |         |- 📄 usersController.js
   |         |- 📄 voluntarioController.js

   |    |- 📁 data base
   |         |- 📄 mongoConfig.js

   |    |- 📁 middlewares
             |- 📄 auth.js

   |    |- 📁 models
   |         |- 📄 DocaoSchema.js
   |         |- 📄 EstoqueSchema.js
   |         |- 📄 PacienteSchema.js
   |         |- 📄 UsersSchema.js
   |         |- 📄 VoluntarioSchema.js
   |
   |    |- 📁 routes
   |         |- 📄 doacaoRoutes.js 
   |         |- 📄 estoqueRoutes.js 
   |         |- 📄 pacienteRoutes.js 
   |         |- 📄 voluntarioRoutes.js 
   
   |- 📄 app.js
   |- 📄 .env
   |- 📄 .gitignore
   |- 📄 package.json
   |- 📄 server.js


## Tecnologias que vamos usar:

| Ferramenta    |                       Descrição                                        |

| `javascript`  |               Linguagem de programação                                 |
| `nodejs`      |            Ambiente de execução do javascript                          |
| `express`     |                    Framework NodeJS                                    |
| `dotenv`      |        Dependência para proteger dados sensíveis do projeto            |
| `mongoose`    |  Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections                                                       |

| `nodemon`     | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente                                                         |
| `npm ou yarn` |                 Gerenciador de pacotes                                 |
| `MongoDb`     |          Banco de dado não relacional orietado a documentos            |
|  Mongo Atlas` | Interface gráfica para verificar se os dados foram persistidos         |
| `Insomnia     | Interface gráfica para realizar os testes                              |


# Contrato da API

### Requisitos 
- [ ] GET "**/voluntario*" Deverá retornar todas os voluntários cadastrados.
- [ ] GET **"/voluntario/[id]** Deverá retornar a voluntarios com o id informado.
  
- [ ] POST   "**/voluntario**" Deverá criar um "voluntario"

- [ ] DELETE   "/cozinha/[ID]" Deverá deletar uma cozinha por id específico e retorna mensagem;

- [ ] PATCH  "/cozinha/[ID]" Deverá alterar informação específica por id específico e retorna o cadastro atualizado;

### Regras de negócio

- [ ]  Não poderá existir cozinhas com o mesmo cnpj;
- [ ]  Não poderá existir cozinhas com o mesmo nome no mesmo bairro;


## Dados para Collection Cozinha

- _id: autogerado e obrigatório;
- nome: texto e obrigatório;
- cnpj: numero e obrigatorio;
- É uma iniciativa privada? : Boolean
- endereco objeto com: 
  - cep: string e obrigatório, 
  - rua: string e obrigatório, 
  - numero: number e obrigatório, 
  - complemento: string e opcional, 
  - referencia: string e opcional, 
  - estado: string e obrigatório, 
  - cidade: string e obrigatório, 
  - bairro: string e obrigatório;
- bairros que atuam: array;
- site: texto e não obrigatório;
- atividades disponíveis: array;
- Pessoa responsável pela cozinha: string e obrigatório;


### API deve retornar seguinte JSON de exemplo:

```javascript
[
  {
    _id: new ObjectId("62ab7c861ff392ef188b1100"),
    nome: 'Cozinha Sabores e saberes Milares',
    cnpj: '01984920/0001-12',
    telefone: '1132331232'
    iniciativa_privada: true,
    endereco: {
      cep: '03563050',
      rua: 'Avenida São Miguel', 
      numero: 2001, 
      complemento: '', 
      referencia: 'Próximo da Praça da paz',
      estado: 'São Paulo', 
      cidade: 'São Paulo',
      bairro: 'Jardim São Miguel'
    },
    bairros_atuantes: ['São Miguel', 'Guainases', 'Itaquera'],
    site: 'https://www.cozinhasabores.com.br',
    atividades_disponiveis: ['Cursos de cozinha Brasileira', 'Restaurante solidário'],
    pessoa_responsavel: 'Thaysa'
    createdAt: 2022-11-05T09:00:02.076Z,
    updatedAt: 2022-11-05T18:00:02.076Z,
    __v: 0
  }
]
```