const express = require('express')
const app = express()

const colecaoUf = require('../UFs/dados/dados')

app.get('/ufs', (req, res) => {
    res.json(colecaoUf)
})

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf)
    const uf = colecaoUf.find(u => u.id === idUF)
    res.json(uf)
})  

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080')
})