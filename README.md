# 🚀 API REST com Node.js e PostgreSQL

Projeto desenvolvido acompanhando uma videoaula da [Rocketseat](https://rocketseat.com.br/), onde construímos uma API do zero utilizando Node.js, banco de dados PostgreSQL e deploy na plataforma Render.

## 📚 Conteúdo abordado

Durante o projeto, aprendemos e implementamos os seguintes tópicos:

- ✅ Criando um servidor HTTP nativo (sem frameworks)
- ✅ Construindo uma API RESTful do zero
- ✅ CRUD (Create, Read, Update, Delete)
- ✅ Rotas HTTP (GET, POST, PUT, DELETE)
- ✅ Request Body (dados enviados pelo cliente)
- ✅ Route Parameters (parâmetros na URL como `/videos/:id`)
- ✅ Query Parameters (filtros como `/videos?search=node`)
- ✅ Conexão com Banco de Dados (PostgreSQL)
- ✅ Deploy gratuito com [Render](https://render.com/)

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [pg (postgres.js)](https://www.npmjs.com/package/postgres)
- [Render](https://render.com/) (deploy e banco na nuvem)
- [Git](https://git-scm.com/) + [GitHub](https://github.com/)

## 🚧 Estrutura básica do projeto

```bash
curso_node/
├── databaseMemory.js        # Simulação de banco em memória
├── databasePostgress.js     # Integração com PostgreSQL
├── server.js                # Arquivo principal com rotas e servidor
├── db.js                    # Configuração da conexão com PostgreSQL
├── .env                     # Variáveis de ambiente (DATABASE_URL etc)
└── README.md                # Este arquivo



 Como rodar o projeto localmente
Clone o repositório:


Copiar
Editar
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
Instale as dependências:


Copiar
Editar
npm install
Crie um arquivo .env e adicione sua DATABASE_URL do PostgreSQL (Render ou local):

env
Copiar
Editar
DATABASE_URL=postgres://usuario:senha@host:porta/database
Inicie o servidor:


Copiar
Editar
node server.js
🌐 Rotas da API
GET /videos → Lista todos os vídeos (ou filtra com query)

POST /videos → Cria um novo vídeo

PUT /videos/:id → Atualiza um vídeo existente

DELETE /videos/:id → Deleta um vídeo

🚀 Deploy no Render
Crie um novo Web Service em Render

Conecte seu repositório GitHub

Configure o comando de start (node server.js)

Configure a variável de ambiente DATABASE_URL

Deploy automático a cada push na branch main

📽️ Créditos
Projeto baseado na aula da Rocketseat:

👉 "Construindo uma API do zero com Node.js e PostgreSQL"

