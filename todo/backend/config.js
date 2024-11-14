// config.js
require("dotenv").config();
const pgtools = require("pgtools");

// List of required environment variables
const requiredEnvVars = [
  "DB_USER",
  "DB_PASSWORD",
  "DB_PORT",
  "DB_HOST",
  "DB_NAME",
];

// Function to check for missing environment variables
const checkEnvVariables = () => {
  const missingVars = requiredEnvVars.filter(
    (varName) => !process.env[varName]
  );

  if (missingVars.length > 0) {
    console.error(
      `Error: Missing the following required environment variables: ${missingVars.join(
        ", "
      )}`
    );
    process.exit(1);
  }
};

// Invoke the environment variables check
checkEnvVariables();

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
      process.exit(1);
    }
  }
};

module.exports = {
  checkAndCreateDatabase,
};
