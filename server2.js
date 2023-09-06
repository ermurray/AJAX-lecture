const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8080;

const app = express();

const corsOptions = {
  origin: "http://localhost:3000"
}
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/stuff2', (req, res) => {
  res.send('here is your stuff');
})

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));