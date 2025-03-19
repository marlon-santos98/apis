import express from 'express'; 
import cors from 'cors'
import pool from './service/connection.js'
import { returnDoctors } from './service/return_doctors.js';

const app = express()
app.use(cors())

app.get('/doctors', async(req, res) => {
    const doctors = await returnDoctors()
    res.json(doctors)
})

app.listen(9000, async () => {
    const data = new Date()
    console.log('Servidor node iniciado em ' +data)
})