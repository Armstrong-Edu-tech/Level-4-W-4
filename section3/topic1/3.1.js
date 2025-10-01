app.use(express.json()); // Parses JSON body data for all routes

// Custom logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger); // Now all requests go through this logger

app.get('/', (req, res) => {
  res.send('Homepage');
});

const checkUser = (req, res, next) => {
  if (req.query.user === 'admin') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

app.get('/secure', checkUser, (req, res) => {
  res.send('Welcome Admin!');
});


