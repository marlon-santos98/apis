import express from 'express'
import cors from 'cors';
import {cadastraLead} from '../capturaLeads/servico/servico.js'
import { validaUsuario } from './validaDados/validaDados.js';

const app = express()
app.use(express.json())
app.use(cors());


app.post('/usuarios', async (req, res) => {
    const {nome, email, telefone} = req.body
    const usuarioValido = validaUsuario(nome, email, telefone)

    if(usuarioValido.status){
        await cadastraLead(nome, email, telefone)
        res.status(204).end()
    }else{
        res.status(400).send({mensagem: usuarioValido.mensagem})
    }
})

app.listen(3001, async () => {
    console.log('Servidor iniciado')
})