import express from 'express'
import pool from './servicos/conexao.js'
import { cadastraLead } from './servicos/cadastro_servico.js'

const app = express()
app.use(express.json())

app.post('/leads', async (req, res) => {
    const {nome, email} = req.body

    if(!nome || !email){
        res.status(400).json({ message: "Nome e e-mail são obrigatórios" })
        return
    }
    const cadastroLeads = await cadastraLead(nome, email)
    if(nome === undefined || email === undefined){
        res.status(404).json({message: "erro ao cadastrar usuário"})
    }
    else{  
        res.json({ cadastroLeads: 'Usuário cadastrado com sucesso' })
    }
})

app.listen(3001, async () => {
    console.log('Servidor iniciado')
    //cadastraLead('Marlon', 'marlonsantos@email.com')

    //const conexao = await pool.getConnection()
    //console.log(conexao.threadId)
})

/* Parei na parte: Cadastrando o usuário no banco de dados */