const { Pool } = require("pg");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const runScript = async (filePath) => {
  const script = fs.readFileSync(path.join(__dirname, filePath)).toString();

  try {
    await pool.query(script);
    console.log(`Script ${filePath} rodado com sucesso!`);
  } catch (error) {
    console.error(`Erro ao rodar script ${filePath}:`, error.message);
  }
};

const runAllScripts = async () => {
  await runScript("./createTable.sql");
  await runScript("./seed.sql");
};

runAllScripts();

module.exports = pool;
