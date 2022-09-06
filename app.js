const express = require('express');

const app = express();
const PORT = '3000';

app.use(express.static(`${__dirname}/dist`));

app.get('/', (req, res) => {
  res.send(`${__dirname}/dist/index.html`);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})
