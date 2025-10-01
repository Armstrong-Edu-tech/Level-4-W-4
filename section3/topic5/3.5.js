// app.js
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan'); 

app.get('/', (req, res) => {
    res.send('Hello from the Express server!');
});

// Use morgan middleware
// 'dev' is a common preset for a concise output colored by response status
app.use(morgan('dev'));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
