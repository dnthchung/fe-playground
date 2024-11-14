// server.js
const express = require("express");
const app = express();
const { checkAndCreateDatabase } = require("./config");
const pool = require("./db");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await checkAndCreateDatabase();

  // Middleware
  app.use(express.json());

  // Basic route
  app.get("/", (req, res) => {
    res.json({ message: "Hello, world!" });
  });

  // Start listening
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
};

startServer();
