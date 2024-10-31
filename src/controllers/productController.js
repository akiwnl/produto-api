const exp = require("constants");
const pool = require("../db");

exports.createProduct = async (req, res) => {
  try {
    const { description, price, quantity } = req.body;
    const result = await pool.query(
      "INSERT INTO products (description, price, quantity) VALUES ($1, $2, $3) RETURNING *",
      [description, price, quantity]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, price, quantity } = req.body;
    const result = await pool.query(
      "UPDATE products SET description = $1, price = $2, quantity = $3 WHERE id = $4 RETURNING *",
      [description, price, quantity, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM products WHERE id = $1", [id]);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
