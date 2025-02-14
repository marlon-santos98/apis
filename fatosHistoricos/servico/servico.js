const fatosHistoricos = require("../dados/fatosHistoricos");

function buscaFato(anoProcurado){
    const fato = fatosHistoricos.find(fatosHistorico => fatosHistorico.Ano === anoProcurado)
    if(fato) {
        console.log(fato.Fato)
    } else {
        console.log("Fato não encontrado, insira um ano válido!")
    }
}

exports.buscaFato = buscaFato