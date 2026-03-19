const express = require('express');
const app = express();
//importando o swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

//nao sei muito bem, mas acho que serve para transformar o body em json
app.use(express.json());

//configurando o swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Tarefas",
      version: "1.0.0",
      description: "Documentação da API de tarefas"
    },
  },
  apis: ["./index.js"],
};

//criando a documentação
const specs = swaggerJsdoc(options);

// rota da documentação
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

//criando array tasks vazio
let tasks = [];

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Cria uma nova tarefa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tarefa criada
 */

//criando a rota POST /tasks
app.post('/tasks', (req, res) => {
    //pegando o corpo da requisicao
  const { titulo } = req.body;
//verificando se o titulo nao esta vazio
  if (!titulo) {
    //retornando o status 400 se titulo não existe
    return res.status(400).json({ error: "Título é obrigatório" });
  }
//criando um objeto com o id e o titulo
  const newTask = {
    //gerando o id pelo tamanho do array
    id: tasks.length,
    titulo
  };
//adicionando a nova tarefa ao array
  tasks.push(newTask);
//enviando a nova tarefa retornando o status 201 padrao na arquitetura REST
  res.status(201).json(newTask);
});

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Lista todas as tarefas
 *     responses:
 *       200:
 *         description: Lista de tarefas
 */

//criando a rota GET /tasks
app.get('/tasks', (req, res) => {
    //enviando o array tasks
    res.json(tasks);
});

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Remove uma tarefa
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tarefa removida
 */

//criando a rota DELETE /tasks
app.delete('/tasks/:id', (req, res) => {
    //pegando o id da tarefa
    const id = parseInt(req.params.id);
    //removendo a tarefa do array
    tasks = tasks.filter(task => task.id !== id);
    //enviando mensagemde sucesso
    res.json({ message: "Tarefa removida" });
});


//iniciando servidor na porta 3000
app.listen(3000, () => {
    console.log('SERVIDOR RODANDO NA PORTA 3000');
});