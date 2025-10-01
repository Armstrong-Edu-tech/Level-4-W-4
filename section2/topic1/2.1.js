 // Example 1: Sending a plain text
res.send('Hello, world!');
// Example 2: Sending an HTML page
res.send('<h1>Welcome to my website</h1>');
 // Example 3: Sending an object
res.send({ message: 'Data saved' }); // Will be converted to JSON


res.json({ user: 'Yousef', role: 'admin' });

res.json({ success: true,message: 'this is json object'});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});

app.get('/products', (req, res) => {
  const category = req.query.category;
  const sort = req.query.sort;
  res.send(`Category: ${category}, Sort by: ${sort}`);
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;
  res.send(`Logged in as ${email}`);
});
