import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'usuariolibertadores',
    password: 'Cajuru@2',
    database: 'libertadoresdb'
})

export default pool