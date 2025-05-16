const express = require("express");
const cors = require("cors");
const connectDB = require('./db');
const productRoutes = require("./routes/products");
const revenueRoutes = require("./routes/revenue");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/uploads", express.static("uploads"));
app.use("/api/products", productRoutes);
app.use("/api/revenue", revenueRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
