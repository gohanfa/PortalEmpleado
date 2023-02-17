
const sql = require ("mssql");
const { Connection } = require("tedious");

const dbSettings = {
    user: "sa",
    password: "johandavid",
    server: "ACERIII_JOHAN",
    database:"NOM_ELECTRONICA",
    options: {
        port: 1433,
        encrypt: true,
        trustServerCertificate: true,
        },
};

async function getConnection() {
    const pool = await sql.connect(dbSettings);    
    const result = await pool.request().query("select TOP 10 HDV_DOCUMENTO FROM HDV_HOJAVIDA");
    console.log(result);
}
getConnection();

console.log(result)