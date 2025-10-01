// app.js
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
app.use(cors()) // to integrate (connect)Backend to frontend
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from the Express server!');
});

// POST /greet
app.post('/greet', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      error: 'Bad Request',
      message: 'The "name" field is required in the request body.'
    });
  }

  res.status(200).json({
    message: `Hello, ${name}! Welcome to our API.`
  });
});

// Handle 404 Not Found
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Global error-handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
      status: err.status || 500
    }
  });
});



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
