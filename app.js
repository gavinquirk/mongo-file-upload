const express = require('express');

// Initialize
const app = express();

// View Engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
