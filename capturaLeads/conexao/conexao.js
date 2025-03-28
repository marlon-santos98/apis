import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'localhost',
    user:  'captura_leads',
    password: 'novousuario',
    database: 'captura_leds'
})

export default pool