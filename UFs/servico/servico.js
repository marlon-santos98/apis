import colecaoUf from "../dados/dados";

export const buscarUFs = () => {
    return colecaoUf
}

export const buscaUFsPorNome = (nomeUF) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUF.toLowerCase()))
}

export const buscaUfPorId = (id) => {
    const idUF = parseInt(id)
    return colecaoUf.find(uf => uf.id === idUF)
}