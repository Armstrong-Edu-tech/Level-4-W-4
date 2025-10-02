// POST /items - Create a new item
app.post('/items', (req, res) => {
  const newItem = req.body; // Get the new item data from the request body

  // Basic validation (optional but good practice)
  if (!newItem.name || !newItem.quantity) {
    return res.status(400).json({ message: 'Name and quantity are required.' });
  }

  // Simulate assigning a unique ID
  newItem.id = 'i' + (items.length + 1); // Simple ID generation for demo
  items.push(newItem); // Add the new item to the array

  res.status(201).json({
    message: 'Item added successfully!',
    item: newItem
  });
});
