/*
API de fatos históricos

O objetivo dessa API é retornar um fato histórico ocorrido entre 1920 e 2020, com base no ano informado pelo usuário.

Requisitos:

. O usuário da aplicação deve informar um ano entre 1920 e 2020
. A API deve buscar o fato correspondente ao ano informado pelo usuário
. Se o fato for encontrado, ele deve ser retornado para ser exibido no front-end
. Se o usuário não informar o ano, informar um ano fora da faixa permitida, ou inválido, como por exemplo com letras ao invés de números, o sistema deve informar que o fato não foi encontrado e retornar um código de status 400
. O sistema deve ter um fato para cada ano permitido, totalizando 101 fatos.
*/ 

const express = require('express')
const app = express()

let retornaAno = require('./servico/servico')

app.get('/', (req, res) => {
    let ano = req.query.ano
    let fato = retornaAno.buscaFato(ano)
    res.json({ano: fato})
})

app.listen((8080), () => {
    let data = new Date
    console.log(`Servidor iniciado em: ${data}`)
})