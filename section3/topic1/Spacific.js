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
