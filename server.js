const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/stuff', (req, res) => {
  res.send('here is your stuff');
})

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));