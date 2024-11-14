// config/envConfig.js
require("dotenv").config();

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
    process.exit(1); // Exit the process with an error code
  }
};

// Invoke the environment variables check
checkEnvVariables();
