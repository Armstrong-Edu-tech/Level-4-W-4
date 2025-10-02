const express = require('express')
const app = express()
const port = 3000



app.post('/register', (req, res) => {
  const { username, age } = req.body;

  // Check for required 'username'
  if (!username) {
    return res.status(400).json({ message: 'Username is required.' });
  }

  // Check if 'username' is a string with at least 3 characters
  if (typeof username !== 'string' || username.length < 3) {
    return res.status(400).json({ message: 'Username must be a string of at least 3 characters.' });
  }

  // Check for required 'age'
  if (age === undefined || age === null) {
    return res.status(400).json({ message: 'Age is required.' });
  }

  // Check if 'age' is a positive number
  if (typeof age !== 'number' || age <= 0) {
    return res.status(400).json({ message: 'Age must be a positive number.' });
  }

  // All validations passed
  res.status(201).json({ message: 'User registered successfully!', user: { username, age } });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
