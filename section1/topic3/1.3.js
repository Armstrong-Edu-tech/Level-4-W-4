// 1. Import the Express module 
const express = require('express'); 
// 2. Create an Express application instance. const app = express();
const app = express();

// 1. Import and configure dotenv package
const dotenv = require('dotenv');
// 2. Load environment variables from the .env file into process.env
dotenv.config();


//  Get the port number from environment variables 
const PORT = process.env.PORT 
//  Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
