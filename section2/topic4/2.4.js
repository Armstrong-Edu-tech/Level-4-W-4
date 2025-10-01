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


// PUT /items/:id - Update an existing item
app.put('/items/:id', (req, res) => {
  const itemId = req.params.id; // Get the ID from the URL parameter
  const updatedData = req.body; // Get the updated data from the request body

  const itemIndex = items.findIndex(item => item.id === itemId);

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found.' });
  }

  // Update the item (merge existing data with updated data)
  items[itemIndex] = { ...items[itemIndex], ...updatedData };

  res.status(200).json({
    message: 'Item updated successfully!',
    item: items[itemIndex]
  });
});


// DELETE /items/:id - Delete an item
app.delete('/items/:id', (req, res) => {
  const itemId = req.params.id; // Get the ID from the URL parameter

  const initialLength = items.length;
  items = items.filter(item => item.id !== itemId); // Filter out the item to delete

  if (items.length === initialLength) {
    // If the length didn't change, the item was not found
    return res.status(404).json({ message: 'Item not found.' });
  }

  res.status(204).send(); // 204 No Content for successful deletion
});
