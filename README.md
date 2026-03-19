# 🚀 API de Tarefas - Node.js

Este projeto é uma API simples desenvolvida com Node.js e Express como parte da minha evolução em desenvolvimento backend.

## 📚 Tecnologias

* Node.js
* Express

## ⚙️ Funcionalidades

* Criar tarefas
* Listar tarefas
* Remover tarefas

## ▶️ Como executar

```bash
npm install
node index.js
```

Acesse:
http://localhost:3000

## 📌 Rotas

GET /tasks
POST /tasks
DELETE /tasks/:id

## 🧪 Testes da API

Os testes das rotas foram realizados utilizando a extensão **REST Client** no VS Code, permitindo executar requisições HTTP diretamente no editor.

Arquivo de testes:
`api.http`

Exemplo de requisição:

```http
POST http://localhost:3000/tasks
Content-Type: application/json

{
  "titulo": "Estudar backend"
}
```

## 🛠️ Ferramentas de teste

* REST Client (VS Code)

Essa abordagem foi escolhida por ser mais leve e integrada ao ambiente de desenvolvimento, evitando a necessidade de ferramentas externas como o Postman.

## 📄 Documentação

A documentação da API está disponível em:

http://localhost:3000/docs


## 🎯 Objetivo

Projeto criado para praticar desenvolvimento backend e evolução como engenheiro de software.
