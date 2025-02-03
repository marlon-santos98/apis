const express = require('express') //importando modulos do express
const app = express() //contem as funcionalidades do express

app.get('/', (req, res) => {
    res.send('Hello World! My name is Marlon')
}) //get recbe uma requisição do front e devolve uma resposta para o mesmo, o back se conecta com o front atraves do get

app.listen(8080, () => {
    let data = new Date()
    console.log('Servidor Node iniciado em ' + data)
})