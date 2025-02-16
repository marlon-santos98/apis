const express = require('express')
const app = express()

const colecaoUf = require('../UFs/dados/dados')

app.get('/ufs', (req, res) => {
    res.json(colecaoUf)
})

app.listen(8080, () => {
    console.log('Servidor iniciado')
})