import pool from "../../leads/servicos/conexao";

export async function cadastraLead(nome, email, telefone) {
    const conexao = await pool.getConnection()
    const resposta = await conexao.query('INSERT INTO captura_leds(nome, email, telefone) values(?,?,?)', [nome, email, telefone])
    console.log(resposta)
    conexao.release()
}