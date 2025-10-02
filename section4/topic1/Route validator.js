// Route with validation
app.post('/register', validateUserRegistration, (req, res) => {
  const { username, email, password } = req.body;
  res.status(201).json({ message: 'Registration successful!', user: { username, email } });
});
