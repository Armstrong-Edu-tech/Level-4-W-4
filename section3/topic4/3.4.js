const validateUserData = (req, res, next) => {
  // Destructure name and email from the request body
  const { name, email } = req.body;

  // Check if either name or email is missing
  if (!name || !email) {
    // Respond with a 400 Bad Request if required fields are missing
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  // Check if the email contains the "@" character
  if (!email.includes('@')) {
    // Respond with a 400 Bad Request if the email format is invalid
    return res.status(400).json({ error: 'Email must be valid.' });
  }

  // If all checks pass, call next() to proceed to the route handler
  next();
};

// Apply the middleware only to the /register route
app.post('/register', validateUserData, (req, res) => {
  // This route handler runs only if validateUserData calls next()
  res.status(200).send('User registered successfully!');
});




