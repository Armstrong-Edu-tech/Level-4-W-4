const express = require('express')
const app = express()
const port = 3000



// Central Error Handler
app.use((err, req, res, next) => {
  console.error('GLOBAL ERROR CAUGHT:', err);

  const statusCode = err.statusCode || err.status || 500;

  res.status(statusCode).json({
    error: {
      message: err.message || 'An unexpected error occurred.'
    }
  });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))