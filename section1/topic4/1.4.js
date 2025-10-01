const express = require('express');
const app = express();
// 1. Import and configure dotenv package
const dotenv = require('dotenv');
// 2. Load environment variables from the .env file into process.env
dotenv.config();
const PORT = process.env.PORT
//  Start the server and listen on the specified port

// Define a simple route for the root URL ('/')
// This function will be executed when a GET request is made to the root path.
app.get('/', (req, res) => {
// 'req' is the request object (contains info about the incoming request)
// 'res' is the response object (used to send a response back to the client)
  res.send('<h1>Welcome to Expres !</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT }`);
});

