const express = require('express')
const app = express()//importação do express

const calculadoraImc = require('./calculadoraImc')//camada de serviço importada

app.get('/', (req, res) => {//inicio do metodo get
    let peso = req.query.peso
    let altura = req.query.altura

    if(calculadoraImc.validaParametro(req.query.peso) && calculadoraImc.validaParametro(req.query.altura)){
    let imc = calculadoraImc.efetuarCalculoImc(peso, altura);
    let status = calculadoraImc.retornaStatusImc(imc);

    let json = {imc: imc, status: status};

    res.json(json);

    } else {
        res.status(400).json({'Erro': 'Peso ou altura inválidos.'})
    }
})

app.listen(8080, () => {//escuta todas as requisições HTTP feitas a API
    console.log('Servidor iniciado')
})