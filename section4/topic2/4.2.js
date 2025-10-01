app.get('/user', (req, res, next) => {
  try {
    const user = null;
    const name = user.name; // TypeError
    res.send(name);
  } catch (err) {
    next(err); // Forward error to error-handling middleware
  }
});
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

res.status(400).json({ message: 'Invalid input data.' });



res.status(404).json({ message: 'Resource not found.' });