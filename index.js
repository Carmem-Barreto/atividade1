const express = require('express');
const server = express();
//const mongoose = require('mongoose');
//const aluno = require('./models/aluno');
server.use(express.json()); 
const aluno = ['Ana', 'Bruna', 'Carmem', 'Diana'];

//mongoose.connect('mongodb+srv://carmem:123@cluster0.5juj2uv.mongodb.net/?retryWrites=true&w=majority')


server.get('/aluno', (req, res) => {
    return res.json(aluno);
})


server.post('/aluno', (req, res) => {
    const { name } = req.body;
    aluno.push(name);
    return res.json(aluno);

})

server.put('/aluno/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    aluno[index] = name;
    return res.json(aluno);
})

server.delete('/aluno/:index', (req, res) => {
    const { index } = req.params;
    aluno.splice(index, 1); 
    return res.send();
});

server.listen(3000);