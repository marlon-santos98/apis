import express from 'express'; // Usando import, já que o "type": "module" foi configurado
import { retornaCampeonatos, retornaCampeonatosID, retornaCampeonatosAno, retornaCampeonatosTime } from './servico/retornaCampeonatos_servico.js';
const app = express();


app.get('/campeonatos', async(req, res) => {
    let campeonatos
    const ano = req.query.ano
    const time = req.query.time

    if(typeof ano === 'undefined' && typeof time === 'undefined'){
        campeonatos = await retornaCampeonatos()
    } else if(typeof ano !== 'undefined') {
        campeonatos = await retornaCampeonatosAno(parseInt(ano))
    }  else if(typeof time !== 'undefined') {
        campeonatos = await retornaCampeonatosTime(time)
    }

    if(campeonatos.length > 0){
        res.json(campeonatos)
    } else {
        res.status(404).json({mensagem: 'Nenhum campeonato encontrado'})
    }
})

app.get('/campeonatos/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const campeonato = await retornaCampeonatosID(id)
    if(campeonato.length > 0){
        res.json(campeonato)
    } else {
        res.status(404).json({mensagem: 'Nenhum campeonato encontrado'})
    }
})

app.listen(9000, async () => {
    const data = new Date()
    console.log("Servidor iniciado em " +data)
})