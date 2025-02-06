const express = require('express') // torna o express utilizavel na aplicação
const app = express()

let data = new Date() //obtemos o dia atual

let mensagemDoDia = require('./mensagemDoDia')//função que executa a mensagem do dia

app.get('/', (req, res) => {
    let dia = data.getDate()//obtemos o dia atual
    let mensagemSelecionada = mensagemDoDia.retornarMensagemDoDia(dia) //função que executa a mensagem do dia
    res.json({mensagem: mensagemSelecionada})
})

app.listen(8080, () => {
    console.log('Servidor iniciado em' + data)
})//porta que ira monitorar a aplicação