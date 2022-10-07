const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const app = express();
const corsOption = {
  origin: 'http://localhost:3000'
}
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('Public'));
app.get('/some-stuff', (req, res) => {
  res.send('yup');
});
app.listen(port, console.log(`Server is listening on port ${port}`));