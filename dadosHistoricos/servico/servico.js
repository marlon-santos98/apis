const historicoInflacao = require("../dados/dados");

const retornaColecao = () => {
    return historicoInflacao
}

const retornaColecaoAno = (ano) => {
    const idAno = parseInt(ano)
    const anoColecao = historicoInflacao.filter(item => item.ano === idAno)
    return anoColecao
}

const retornaColecaoId = (id) => {
    const idColecao = parseInt(id)
    const anoColecaoId = historicoInflacao.find(item => item.id === idColecao)
    return anoColecaoId
}

const calculoIpca = (valor, dataInicialMes, dataInicialAno, dataFinalMes, dataFinalAno) => {
    const historicoFiltrado = historicoInflacao.filter(
      historico => {
        if (dataInicialAno === dataFinalAno) {
          return historico.ano === dataInicialAno && historico.mes >= dataInicialMes && historico.mes <= dataFinalMes;
        } else {
          return (
            (historico.ano === dataInicialAno && historico.mes >= dataInicialMes) ||
            (historico.ano > dataInicialAno && historico.ano < dataFinalAno) ||
            (historico.ano === dataFinalAno && historico.mes <= dataFinalMes)
          );
        }
      }
    );
  
    let taxasMensais = 1;
    for (const elemento of historicoFiltrado) {
      taxasMensais *= (elemento.ipca / 100) + 1;
    }
  
    const resultado = valor * taxasMensais;
    return parseFloat(resultado.toFixed(2));
  };
  


module.exports = { retornaColecao, retornaColecaoAno, retornaColecaoId, calculoIpca }
