const swaggerUi = require('swagger-ui-express');
const path = require('path');
const fs = require('fs');

// Path to the Swagger JSON file
const swaggerFilePath = path.join(__dirname, 'docs', 'swagger.json');

// Load the Swagger JSON file
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerFilePath, 'utf8'));

// Export Swagger UI and Swagger document
module.exports = { swaggerUi, swaggerDocument };
