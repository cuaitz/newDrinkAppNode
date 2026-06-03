# newDrinkAppNode

API Node.js para gerenciamento de bebidas com autenticação de usuários baseada em JWT.

## Integrantes
- Augusto Fogaça (dev/tester)
- Simon Tumanov (dev/qa)

## Tecnologias
- Node.js, Express, MongoDB, JWT, Bcrypt, Cors

## Pré-requisitos
- Node.js (v14 ou superior)
- MongoDB (local ou Atlas)
- npm ou yarn

## Como rodar

### 1. Clone o repositório
```bash
git clone https://github.com/cuaitz/newDrinkAppNode
cd newDrinkAppNode
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```
PORT=3000
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/drinkapp
JWT_SECRET=sua_chave_secreta_jwt
```

### 4. Inicie o servidor
```bash
# Modo desenvolvimento com nodemon
npm run dev

# Modo produção
node index.js
```

### 5. Acesse a API
```
http://localhost:3000
```

## Endpoints da API

### Autenticação (User)
| Metodo | Rota | Descricao | Auth |
|--------|------|-----------|------|
| POST   | `/api/users/register` | Registrar novo usuário | Não |
| POST   | `/api/users/login` | Fazer login | Não |
| GET    | `/api/users/me` | Obter dados do usuário autenticado | Sim |

### Bebidas (Drinks)
| Metodo | Rota | Descricao | Auth |
|--------|------|-----------|------|
| POST   | `/api/drinks` | Criar nova bebida | Sim |
| GET    | `/api/drinks` | Listar todas as bebidas | Sim |
| GET    | `/api/drinks/user` | Listar bebidas do usuário autenticado | Sim |
| GET    | `/api/drinks/:id` | Obter detalhes de uma bebida | Sim |
| PUT    | `/api/drinks/:id` | Atualizar uma bebida | Sim |
| DELETE | `/api/drinks/:id` | Deletar uma bebida | Sim |

## Estrutura do Projeto
```
newDrinkAppNode/
├── controllers/          # Lógica dos endpoints
│   ├── drink.controller.js
│   └── user.controller.js
├── models/              # Schemas do MongoDB
│   ├── drink.model.js
│   └── user.model.js
├── routes/              # Definição das rotas
│   ├── drink.routes.js
│   └── user.routes.js
├── middlewares/         # Middlewares (autenticação, etc)
│   └── auth.js
├── shared/              # Utilitários compartilhados
│   └── user.utils.js
├── index.js             # Arquivo principal
└── package.json         # Dependências
```

## Deploy
Acesse a aplicação em produção: https://new-drink-app-node.vercel.app/
