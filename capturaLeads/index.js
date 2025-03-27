import express from 'express'
import { cadastraLead } from './servico/servico.js' 
import pool from '../leads/servicos/conexao.js'

const app = express()


app.post('/usuarios', async (req, res) => {
    const {nome, email, telefone} = req.body
})
app.listen(3001, async () => {
    console.log('Servidor iniciado')
})