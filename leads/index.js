import express from 'express'
import pool from './servicos/conexao.js'
import { validaUsuario } from './validacao/valida.js'
import { cadastraLead } from './servicos/cadastro_servico.js'

const app = express()
app.use(express.json())

app.post('/leads', async (req, res) => {
    const {nome, email} = req.body
    const usuarioValido = validaUsuario(nome, email) /* Filtrando se os dados preenchidos pelo usuario estão corretos */

    if(usuarioValido.status){
        await cadastraLead(nome, email)
        res.status(204).end()
    }else{
        res.status(400).send({mensagem: usuarioValido.mensagem})
    }})

app.listen(3001, async () => {
    console.log('Servidor iniciado')
    //cadastraLead('Marlon', 'marlonsantos@email.com')

    //const conexao = await pool.getConnection()
    //console.log(conexao.threadId)
})