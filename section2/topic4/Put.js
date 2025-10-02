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