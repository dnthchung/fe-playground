// config/dbConfig.js
const pgtools = require("pgtools");
require("dotenv").config();

// Configuration object for pgtools
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
};

// Database name from environment variables
const databaseName = process.env.DB_NAME;

// Function to check and create the database if it doesn't exist
const checkAndCreateDatabase = async () => {
  try {
    await pgtools.createdb(config, databaseName);
    console.log(`Database "${databaseName}" created successfully.`);
  } catch (err) {
    if (err.name === "duplicate_database") {
      console.log(`Database "${databaseName}" already exists.`);
    } else {
      console.error("Error creating database:", err);
      process.exit(1); // Exit the process with an error code
    }
  }
};

module.exports = {
  checkAndCreateDatabase,
};