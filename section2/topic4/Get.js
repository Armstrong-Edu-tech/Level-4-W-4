// GET /items - Get all items
app.get('/items', (req, res) => {
  res.json(items); // Send the entire items array as JSON
});

// GET /items/:id - Get a single item by ID
app.get('/items/:id', (req, res) => {
  const itemId = req.params.id; // Get the ID from the URL parameter
  const item = items.find(item => item.id === itemId); // Find the item

  if (item) {
    res.json(item); // If found, send the item as JSON
  } else {
    res.status(404).json({ message: 'Item not found.' }); // If not found, send 404
  }
});
