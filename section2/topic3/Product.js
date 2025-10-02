let products = [
  { id: 'p1', name: 'Laptop', price: 1200 },
  { id: 'p2', name: 'Mouse', price: 25 },
];

app.use(express.json()); // required to read req.body

app.put('/products/:id', (req, res) => {
  const productId = req.params.id;
  const newProductData = req.body;

  const index = products.findIndex(p => p.id === productId);

  if (index === -1) {
    return res.status(404).json({ message: 'Product not found.' });
  }

  // Replace or update the existing product
  products[index] = { ...products[index], ...newProductData };

  res.status(200).json({
    message: 'Product updated successfully.',
    product: products[index]
  });
});



