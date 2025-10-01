const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Dummy in-memory array
const users = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' }
];

// ========== Middlewares ==========

// Allow external frontend access
app.use(cors());

// Log HTTP requests
app.use(morgan('dev'));

// Parse JSON body
app.use(express.json());


// ========== Routes ==========

// GET /users
app.get('/users', (req, res) => {
  res.json({ users });
});

// POST /users
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'Name must be a non-empty string.' });
  }
if (!email || typeof email !== 'string' || !email.includes('@') ) {
    return res.status(400).json({ error: 'Email must be a valid format .' });
  }

  const newUser = { name, email };
  users.push(newUser);
  res.status(201).json({ message: 'User added.', user: newUser });
});

// PUT /users/:id
app.put('/users/:id', (req, res) => {
  const index = parseInt(req.params.id);
  const { name, email } = req.body;

  if (isNaN(index) || index < 0 || index >= users.length) {
    return res.status(404).json({ error: 'User not found at that index.' });
  }

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Name must be a string.' });
  }
if (!email || typeof email !== 'string' || !email.includes('@') ) {
    return res.status(400).json({ error: 'Email must be a valid format .' });
  }

  users[index] = { name, email };
  res.json({ message: 'User updated.', user: users[index] });
});

// DELETE /users/:id
app.delete('/users/:id', (req, res) => {
  const index = parseInt(req.params.id);

  if (isNaN(index) || index < 0 || index >= users.length) {
    return res.status(404).json({ error: 'User not found at that index.' });
  }

  const deletedUser = users.splice(index, 1);
  res.json({ message: 'User deleted.', user: deletedUser[0] });
});

// ========== Error Handling ==========

// Central error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// ========== Start Server ==========
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
