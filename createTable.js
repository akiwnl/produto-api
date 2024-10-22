const pool = require("./db");

const createProductTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      description TEXT NOT NULL,
      price NUMERIC(10, 2) NOT NULL,
      quantity INT NOT NULL DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabela "products" criada com sucesso!');
  } catch (error) {
    console.error("Erro ao criar tabela.", error.message);
  } finally {
    pool.end();
  }
};

createProductTable();
