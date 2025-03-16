import pool from "./conexao.js";

export async function retornaCampeonatos() {
    const conexao = await pool.getConnection()

    const campeoantos_tb = await conexao.query('SELECT id, campeao, vice, ano FROM campeonatos')
    const campeonatos = campeoantos_tb[0]
    conexao.release()
    return campeonatos
}

export async function retornaCampeonatosID(id) {
    const conexao = await pool.getConnection()

    const campeoantos_tb = await conexao.query('SELECT id, campeao, vice, ano FROM campeonatos WHERE id = ' + id)
    const campeonatos = campeoantos_tb[0]
    conexao.release()
    return campeonatos
}

export async function retornaCampeonatosAno(ano) {
    const conexao = await pool.getConnection()
    const campeoantos_tb = await conexao.query('SELECT id, campeao, vice, ano FROM campeonatos WHERE ano = ' + ano)
    const campeonatos = campeoantos_tb[0]
    conexao.release()
    return campeonatos
}

export async function retornaCampeonatosTime(time) {
    const conexao = await pool.getConnection()
    const campeoantos_tb = await conexao.query('SELECT id, campeao, vice, ano FROM campeonatos WHERE campeao = "'+time+'"')
    const campeonatos =  campeoantos_tb[0]
    conexao.release()
    return campeonatos
}