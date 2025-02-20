const express = require('express')
import { buscaUfPorId, buscarUFs, buscaUFsPorNome} from "./servico/servico"
const app = express()

app.get('/ufs', (req, res) => {
    const nomeUF = req.query.busca
    const resultado = nomeUF ? buscaUFsPorNome(nomeUF) : buscarUFs()  
    if(resultado.length > 0){
        res.json(resultado)
    } else{
        res.status(404).send({"erro":"Uf não encontrada!"})
    }
})

app.get('/ufs/:iduf', (req, res) => {
    const idUF = buscaUfPorId(req.params.iduf)

    if(uf){
        res.json(uf)
    } else if (isNaN(parseInt(req.params.iduf))) {
            res.status(404).send({"erro":"Requisição inválida"})
        } else {
            res.status(404).send({"erro":"UF nã encontrada"})
        }
    })

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080')
})