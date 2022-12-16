<br>
<div align = "center">
<img src='./src/doe-farma.png' width = 500 alt = 'logo doe-farma'>
</div>
<br>




PROJETO: DOE-FARMA


DoeFarma, é um sistema de cadastro que busca conectar doadores de itens utilizados na saúde, como produtos e utensílios médico-hospitalares. Os volumes poderão ser ofertados de maneira gratuita para pacientes que ainda necessitam ou estejam fazendo uso contínuo destes produtos. Neste projeto é possível o recebimento dos seguintes: medicamentos na validade, curativos em geral, material de higiene pessoal, equipamentos e utensílios para pessoas com deficiência, produtos que diminuam os casos de feridas por decúbito em pessoas com mobilidade reduzida, doentes de câncer ou imunosuprimidos. A intenção do app é conectar possíveis fontes de recebimento, com a comprovação da necessidade, pois desta forma, os que estão realizando a doação terão certeza do destino.


 

OBJETIVO


Este projeto teve como principal objetivo oferecer medicamentos sem custos a pessoas que possuem baixo poder aquisitivo, devido a aumentos constantes no setor farmacêutico e produtos médico-hospitalares que tem deixado diversos pacientes sem poder iniciar ou continuar o tratamento. Além de proporcionar a qualidade de vida, este projeto também tem por finalidade promover uma conscientização social e ambiental, como bem sabemos a sociedade tem hábitos inadequados no descarte de medicamentos e equipamentos que não servem para uso, desta forma, será oferecido também treinamentos, palestras e oficinas para que seja feito o descarte consciente desse produtos.





 📁 Arquitetura

 

 📁 Projeto

 📁 node_modules

 📁 src

      📁 controllers
          📄 authController.js
          📄 doadorController.js
          📄 estoqueController.js 
          📄 pacienteController.js 
          📄 voluntarioController.js 


     📁 database
          📄 moogoConfig.js


     📁  middlewares
          📄 auth.js

      
     📁 models
          📄 DoadorSchema.js
          📄 EstoqueSchema.js 
          📄 PacienteSchema.js 
          📄 PacienteSchema.js  
          📄 UseSchema.js   
          📄 VoluntarioSchema.js
        
   
   
     📁 routes
         📄 authRouter.js
         📄 doadorRouter.js   
         📄 estoqueRouter.js   
         📄 indexRouter.js    
         📄 pacienteRouter.js   
         📄 voluntarioRouter.js 


     📄 app.js  
     📄 .env   
     📄 .env.exemple    
     📄 .gitignore  
     📄 package-lock.json   
     📄 package.json   
     📄 projeto.md
     📄 server.js
     📄 vercel.json



## Tecnologias que vamos usar:


 Ferramenta   Descrição                                                                      


 `javascrip` Linguagem de programação                                                       

 `nodejs`   Ambiente de execução do javascript        

 `express`  Framework NodeJS                                                            

 `dotenv`  Dependência para proteger dados sensíveis do projeto                                

 `mongoose` Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections                                                                                                          
 `nodemon` Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente                                                                                                     

 `npm ou yarn`Gerenciador de pacotes                                                    

 `MongoDb` Banco de dado não relacional orietado a documentos                                     

 `Mongo Atlas` Interface gráfica para verificar se os dados foram persistidos                           

`Insomnia` Interface gráfica para realizar os testes                                   



 <br>

<br>


# Contrato da API



### Requisitos

#Doador

- [ ] POST   "**/criarDoador**" Deverá criar um "doador".

- [ ] GET "**/buscarTodosDoadores/**" Deverá retornar todos os doadores cadastrados.

- [ ] GET **"/buscarporid/[id]** Deverá retornar a doador com o id informado.

- [ ] DELETE   "/deletarDodor/[ID]" Deverá deletar uma doador por id específico e retorna mensagem;

- [ ] PATCH  "/atualizarDoadore/[ID]" Deverá alterar informação específica por id específico e retorna o cadastro atualizado;


#Estoque

- [ ] POST "**ususario/**" Deverá cadastrar login do usuário para acesso ao estoque;

- [ ] POST   "**/login**" Deverá criar um login do usurario para acesso ao estoque;

- [ ] POST "**cadastrar/**" Deverá cadastrar medicamento no estoque;

- [ ] GET "**buscar/**" Deverá todos medicamentos do estoque;

- [ ] GET **"/medicamento/[id]** Deverá retornar medicamento com o id informado;

- [ ] DELETE   "/deletar/[ID]" Deverá deletar medicamento do estoque por id específico e retorna mensagem;

- [ ] PATCH  "/atualizar/[ID]" Deverá alterar informação específica por id específico e retorna o cadastro atualizado;


#Paciente

- [ ] POST "**usuario/**" Deverá cadastrar login do voluntário para altere algum dado necessário do  paciente;

- [ ] POST   "**/login**" Deverá criar login do paciente para solicitar o medicamento;

- [ ] POST "**cadastrar/**" Deverá cadastrar pacientes;

- [ ] GET "**buscar/**" Deverá buscar todos pacientes cadastrados;

- [ ] GET **"/paciente/[id]** Deverá retornar paciente com o id informado;

- [ ] DELETE   "/deletar/[ID]" Deverá deletar paciente do sistema por id específico e retorna mensagem;

- [ ] PATCH  "/atualizar/[ID]" Deverá alterar informações específicas por id específico e retorna o cadastro atualizado;


#Voluntário

- [ ] POST "**usuario/**" Deverá cadastrar login do voluntário para altere algum dado necessário do  paciente;

- [ ] POST   "**/login**" Deverá criar login do voluntário;

- [ ] POST "**cadastrar/**" Deverá cadastrar voluntários;

- [ ] GET "**buscar/**" Deverá buscar todos pacientes cadastrados;

- [ ] GET **"/paciente/[id]** Deverá retornar voluntários com o id informado;

- [ ] DELETE   "/deletar/[ID]" Deverá deleta voluntário do sistema por id específico e retorna mensagem;

- [ ] PATCH  "/atualizar/[ID]" Deverá alterar informações específicas por id específico e retorna o cadastro atualizado;


### Regras de negócio


- [ ]  Não poderá existir volutário com o mesmo cpf ;

- [ ]  Não poderá existir paciente com o mesmo cpf;



<br>

<br>


## Dados para Projeto Doe-Farma


#Doadores:

- _id: autogerado e obrigatório;

- nome doador: string e obrigatório;

- telefone: string e obrigatorio;

- cpf: string e obrigatorio;

- email: string e obrigatorio;

- endereco: string e obrigatório;

- medicamento: string e obrigatório;

- validade: string e obrigatório;

- lote: string e obrigatório;

- medicamento_usado: string e obrigatório;

- quantidade: string e obrigatório;


#Estoque:

- _id: autogerado e obrigatório;

- nome_funcionario: string e obrigatório;

- matricula_funcionario: string e obrigatorio;

- data_entrada: string e obrigatorio;

- nome_medicacao: string e obrigatorio;

- forma_farmaceutica: string e obrigatorio;

- validade: string e  obrigatório;

- lote: string e obrigatório;

- composicao: string e obrigatório;

- acao_medicamentosa: string e obrigatório;

- contra_indicacao: string e obrigatório;

- medicamento_usado: string e obrigatório;

- quantidade_medicamento: string e obrigatório;


#Paciente:

- _id: autogerado e obrigatório;

- nome_paciente: string e obrigatório;

- telefone: string e obrigatorio;

- email: string e obrigatorio;

- cpf: string e obrigatorio;

- data_nascimento: string e obrigatorio;

- endereco: string e  obrigatório;

- medicamento: string e obrigatório;

- forma_farmaceutica: string e obrigatório;

- quantidade_medicamento: string e obrigatório;


#Vonluntario

- _id: autogerado e obrigatório;

- nome_voluntario: string e obrigatório;

- telefone: string e obrigatório;

- email: string e obrigatório;

- cpf: string e obrigatório;

- registro_profisional: string e obrigatório;

- data_nascimento: string e obrigatório;

- endereco: string e obrigatório;

- profissao: string e obrigatório;

- especialidade: string e obrigatório;



### API deve retornar seguinte JSON de exemplo:



```javascript

[

  {

     "Bem_vindas": "Parabéns por sua iniciativa! O seu usuário foi cadastrado!",

     "Cadastro": {

          "name": "Jualianne",

          "email": "juju22@gmail.com",

          "password": "$2b$10$GYDeoykrESj.M2RPk.8b.exP.bASekvzngcWEcXIN5EQk96iXpp9K",

          "cpf": 78684655,

          "telefone": 71985742562,

          "estado": "Pernambuco",

          "cidade": "Olinda",

          "registro_profissional_ativo": true,

          "profissao": "Farmacêutica",

          "possui_local_para_atendimento": true,

          "tempo_disponivel_para_voluntariado": "8h",

          "_id": "63949894572971410c9d8081",

          "id": "63949894572971410c9d8082",

          "createdAt": "2022-12-10T14:32:52.680Z",

          "updatedAt": "2022-12-10T14:32:52.680Z",

          "__v": 0

     }

}

]

``