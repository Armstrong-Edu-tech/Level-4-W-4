app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // For JSON data
app.use(express.urlencoded({ extended: true }));// Enable form data parsing
app.use(cors())
// POST route
app.post('/register', (req, res) => {
// Access the 'name' field sent by the client in the request body
  const name = req.body.name;
  const email = req.body.email;
// Access the 'email' field sent by the client in the request body
  res.send(`Registered user: ${name} with email: ${email}`);
});
