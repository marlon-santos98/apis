import express from 'express'; // Usando import, já que o "type": "module" foi configurado
import { retornaCampeonatos } from './servico/retornaCampeonatos_servico.js';
const app = express();


app.get('/campeonatos', async(req, res) => {
    const campeonatos = await retornaCampeonatos()
    res.json(campeonatos)
})

app.listen(9000, async () => {
    const data = new Date()
    console.log("Servidor iniciado em " +data)
})