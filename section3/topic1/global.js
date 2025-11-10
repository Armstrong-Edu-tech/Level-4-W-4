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
