let users = [
  { id: 'u1', name: 'Alice' },
  { id: 'u2', name: 'Bob' },
];

app.use(express.json()); // ensure body parsing if needed later

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  const originalLength = users.length;
  users = users.filter(user => user.id !== userId);

  if (users.length === originalLength) {
    return res.status(404).json({ message: 'User not found.' });
  }

  res.status(204).send(); // No Content – success with no body
});

