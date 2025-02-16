const fatosHistoricos = [
    {"Ano": "1920", "Fato": "As mulheres ganham o direito ao voto nos EUA"},
    {"Ano": "1921", "Fato": "O partido comunista chinês é fundado"},
];


function buscaFato(anoProcurado){
    const fato = fatosHistoricos.find(fatosHistorico => fatosHistorico.Ano === anoProcurado)
    if(fato) {
        console.log(fato.Fato)
    } else {
        console.log("Fato não encontrado")
    }
}

buscaFato("1921")