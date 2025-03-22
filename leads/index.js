import express from 'express'
import pool from './servicos/conexao.js'

const app = express()

app.listen(3001, async () => {
    console.log('Servidor iniciado')

    const conexao = await pool.getConnection()
    console.log(conexao.threadId)
})

/* Parei na parte: Cadastrando o usuário no banco de dados */