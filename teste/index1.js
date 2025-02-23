const historicoInflacao = [
    { id: 1, ano: 2015, mes: 1, ipca: 1.24 },
    { id: 2, ano: 2015, mes: 2, ipca: 1.22 }
];

const dataInicioMes = historicoInflacao.find(item => item.mes === 1);
console.log(dataInicioMes.ipca);  // Vai acessar o 'ipca' do primeiro item