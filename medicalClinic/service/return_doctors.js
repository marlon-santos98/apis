import pool from "./connection.js";

async function executaQuery(conexao, query) {
    const resultado_query = await conexao.query(query)
    const resposta = resultado_query[0]
    return resposta
}

export async function returnDoctors(params) {
    const conexao = await pool.getConnection()
    const query = 'SELECT id, telefone, email, descricao FROM medicos'
    const doctors = executaQuery(conexao, query)
    conexao.release()
    return doctors
}