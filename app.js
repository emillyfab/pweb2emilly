const express = require('express');
const path = require('path');
const app = express();


app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'static')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});


app.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'formulario.html'));
});

app.post('/carro', (req, res) => {
    const { modelo, marca, ano, cor, km, valor } = req.body;

    console.log("Modelo do carro: " + modelo);
    console.log("Marca do carro: " + marca);
    console.log("Ano do carro: " + ano);
    console.log("Cor do carro: " + cor);
    console.log("Kilometragem: " + km);
    console.log("Valor: " + valor);

    res.redirect('/lista.html');
});


app.listen(3003, () => {
    console.log('Servidor rodando na porta http://localhost:3003');
});