import express from 'express'; // Usando import, já que o "type": "module" foi configurado
import pool from "./servico/conexao.js"; // Também com import se estiver usando ESModules
const app = express();


app.listen(9000, async () => {
    const data = new Date()
    console.log("Servidor iniciado em " +data)
})