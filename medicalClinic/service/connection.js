import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'usermedical',
    password: 'Cajuru@2',
    database: 'clinicamedica'
})

export default pool