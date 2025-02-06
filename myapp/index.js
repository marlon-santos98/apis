const express = require('express')
const app = express()//importação do express

const calculadoraImc = require('./calculadoraImc')//camada de serviço importada

app.get('/', (req, res) => {//inicio do metodo get
    let peso = req.query.peso
    let altura = req.query.altura

    let imc = calculadoraImc.efetuarCalculoImc(peso, altura)//funcao chamada atraves da constante calcular IMC
    
    res.json({imc: imc})
})

app.listen(8080, () => {//escuta todas as requisições HTTP feitas a API
    console.log('Servidor iniciado')
})