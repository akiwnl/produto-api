const express = require("express");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");
const PORT = 3000;
const app = express();
const db = require("./db");

app.use(cors());
app.use(express.json());
app.use("/", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
