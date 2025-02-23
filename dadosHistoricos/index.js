const express = require('express')
const { retornaColecao, retornaColecaoAno, retornaColecaoId, calculoIpca } = require('./servico/servico'); 
const app = express()

app.get('/historicoIPCA', (req, res) => {
    const historico = req.query.busca  
    const resultado = retornaColecao(historico)
    res.json(resultado)
})

app.get('/historicoIPCA/:ano', (req, res) => {
    const idAno = retornaColecaoAno(req.params.ano)
    res.json({idAno})
}) 

app.get('/historicoIPCA/id/:id', (req, res) => {
    const colecaoId = retornaColecaoId(req.params.id)
    res.json({colecaoId})
})

app.get('/historicoIPCA/calculo', (req, res) => {
    const valor = parseFloat(req.query.valor);
    const dataInicialMes = parseInt(req.query.mesInicial);
    const dataInicialAno = parseInt(req.query.anoInicial);
    const dataFinalMes = parseInt(req.query.mesFinal);
    const dataFinalAno = parseInt(req.query.anoFinal);
  
    if (validacaoErro(valor, dataInicialMes, dataInicialAno, dataFinalMes, dataFinalAno)) {
      res.status(400).json({ erro: 'Parâmetros inválidos' });
      return;
    }
  
    const resultado = calculoIpca(valor, dataInicialMes, dataInicialAno, dataFinalMes, dataFinalAno);
    res.json({ resultado: resultado });
  });



app.listen(8080, () => {
    let data = new Date()
    console.log(`Servidor iniciado na porta 8080 em ${data}`)
})