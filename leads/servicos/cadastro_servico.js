export async function cadastraLead(nome, email) {
    const conexao = await pool.getConnection()
    const resposta = await conexao.query('INSERT INTO leads (nome, email) values("'+nome+'","'+email+'")')
    
    console.log(resposta)

    conexao.release()
}