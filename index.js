const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); //funcionalidade de segurança - intercepta tudo que passa pela aplicação e bloqueia requisições duvidosas
app.use(express.json()); //habilita transações em json

app.get('/', (req, res) => {
    res.json({mensagem: 'oi'})
});

app.listen(PORT, '0.0.0.0', ()=> { //faz o bind da própria máquina com uma porta
    console.log("Servidor rodando na porta: " + PORT)
})