import express from 'express'; 
import cors from 'cors'
import pool from './service/connection.js'
const app = express()
app.use(cors())

app.listen(9000, async () => {
    const data = new Date()
    console.log('Servidor node iniciado em ' +data)

    const conexao = await pool.getConnection()
    console.log(conexao.threadId)
})