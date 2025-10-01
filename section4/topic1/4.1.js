app.post('/register', (req, res) => {
  const { username, age } = req.body;

  // Check for required 'username'
  if (!username) {
    return res.status(400).json({ message: 'Username is required.' });
  }

  // Check if 'username' is a string with at least 3 characters
  if (typeof username !== 'string' || username.length < 3) {
    return res.status(400).json({ message: 'Username must be a string of at least 3 characters.' });
  }

  // Check for required 'age'
  if (age === undefined || age === null) {
    return res.status(400).json({ message: 'Age is required.' });
  }

  // Check if 'age' is a positive number
  if (typeof age !== 'number' || age <= 0) {
    return res.status(400).json({ message: 'Age must be a positive number.' });
  }

  // All validations passed
  res.status(201).json({ message: 'User registered successfully!', user: { username, age } });
});

const { body, validationResult } = require('express-validator');

const validateUserRegistration = [
  // Username rules
  body('username')
    .trim()
    .notEmpty().withMessage('Username is required.')
    .isLength({ min: 3, max: 20 }).withMessage('Username must be between 3 and 20 characters.')
    .isAlphanumeric().withMessage('Username must contain only letters and numbers.'),

  // Email rules
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required.')
    .isEmail().withMessage('Invalid email format.'),

  // Password rules
  body('password')
    .notEmpty().withMessage('Password is required.')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),

  // Middleware to handle validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];


// Route with validation
app.post('/register', validateUserRegistration, (req, res) => {
  const { username, email, password } = req.body;
  res.status(201).json({ message: 'Registration successful!', user: { username, email } });
});
