const express = require("express");
const app = express();
const porta = 3000;

// API que recebe dois números e retorna a soma
app.get('/adicao', (req, res) => {  // Req é de Requisição e Res é de Resposta
    const num1 = parseFloat(req.query.n1);
    const num2 = parseFloat(req.query.n2);
    const resultado = num1 + num2;
    res.send(`Resultado: ${resultado}`);
});
// Pra executar o cálculo, você adiciona isso na URL:
// http://localhost:3000/adicao?n1=3&n2=2
// Nesse exemplo estamos atribuindo 3 à n1 e 2 à n2, o resultado deve ser 5


// Outras APIs
// subtracao,
// multiplicacao

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});