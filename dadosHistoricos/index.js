const express = require('express')
const { retornaColecao } = require('./servico/servico'); 
const app = express()

app.get('/historicoIPCA', (req, res) => {
    const historico = req.query.busca  
    const resultado = retornaColecao(historico)
    res.json(resultado)
})

app.listen(8080, () => {
    let data = new Date()
    console.log(`Servidor iniciado na porta 8080 em ${data}`)
})