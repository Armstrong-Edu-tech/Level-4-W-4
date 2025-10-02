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