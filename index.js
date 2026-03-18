const express = require('express');
const app = express();

//nao sei muito bem, mas acho que serve para transformar o body em json
app.use(express.json());
//criando array tasks vazio
let tasks = [];

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


//criando a rota GET /tasks
app.get('/tasks', (req, res) => {
    //enviando o array tasks
    res.json(tasks);
});

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