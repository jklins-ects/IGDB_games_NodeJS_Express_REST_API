const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node.js REST API with Swagger and MySQL",
            version: "1.0.0",
        },
    },
    apis: ["./routes/api/*.js"], // Points to API route files
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
