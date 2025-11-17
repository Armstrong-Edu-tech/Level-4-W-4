let products = [
  { id: "p1", name: "Laptop", price: 1200 },
  { id: "p2", name: "Mouse", price: 25 },
];
app.use(express.json()); // required to read req.body

app.put("/products/:id", (req, res) => {
  const productId = req.params.id;
  const { name, price } = req.body;

  const product = products.find((p) => p.id === productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (name) product.name = name;
    if (price) product.price = price;
    res.json({
      message: "Product updated",
      product,
    });
  });

  
