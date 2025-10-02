const express = require('express')
const app = express()
const port = 3000

app.get('/user', (req, res, next) => {
  try {
    const user = null;
    const name = user.name; // TypeError
    res.send(name);
  } catch (err) {
    next(err); // Forward error to error-handling middleware
  }
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))