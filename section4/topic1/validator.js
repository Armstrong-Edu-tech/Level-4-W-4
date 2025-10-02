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



