const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Example POST route
app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  console.log('Received JSON data:', receivedData);

  res.status(200).json({
    message: 'JSON data processed successfully!',
    yourData: receivedData
  });
});

// Serve static files from 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
