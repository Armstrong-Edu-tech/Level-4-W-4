const express = require('express');
const app = express();
// 1. Import and configure dotenv package
const dotenv = require('dotenv');
// 2. Load environment variables from the .env file into process.env
dotenv.config();
const PORT = process.env.PORT
//  Start the server and listen on the specified port


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT }`);
});

