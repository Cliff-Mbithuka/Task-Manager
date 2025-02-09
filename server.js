const path = require("path");
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const { swaggerUi, swaggerDocument } = require("./swagger");

dotenv.config();
connectDB();


const app = express();
app.use(cors());
app.use(express.json());

// Load the Swagger JSON
// const swaggerFilePath = path.join(__dirname, "docs", "swagger.json");
// const swaggerDocument = JSON.parse(fs.readFileSync(swaggerFilePath, "utf8"));

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 2999;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
